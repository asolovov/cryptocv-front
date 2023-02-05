import {ethers} from "ethers";
import CVContract from "@/contracts/OnchainCVContract.json";

export const connect = async () => {
    const metamask = _getMetamask();

    if (metamask.ok) {
        const network = await _isNetworkValid(metamask.metamask);

        if (network.ok) {
            try {
                await metamask.metamask.request({ method: 'eth_requestAccounts' });
                return metamask;
            } catch (error) {
                console.error("connect: ", error)
                return {
                    ok: false,
                    error: "Please connect",
                }
            }
        } else return network;
    }

    return metamask;
}

export const isUserContractOwner = async () => {
    const userAddress = await _getUserAddress();

    if (userAddress) {
        const contract = getContractWithoutSigner();
        const owner = await contract.owner();
        return owner === userAddress;
    } return false;
}

export const getContractWithoutSigner = ({infuraApi}) => {
    const chainName = process.env.NEXT_PUBLIC_CHAIN_NAME;
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;

    const provider = new ethers.providers.InfuraProvider(chainName, infuraApi);

    return new ethers.Contract(
        contractAddress,
        CVContract.abi,
        provider
    );
}

export const getContractWithSigner = async () => {
    const contractAddress = process.env.NEXT_PUBLIC_CONTRACT_ADDRESS;
    const metamask = await connect();

    if (metamask.ok) {
        const provider = new ethers.providers.Web3Provider(metamask.metamask);
        const signer = await provider.getSigner();

        if (await signer.getAddress()) {
            const contract = new ethers.Contract(
                contractAddress,
                CVContract.abi,
                signer
            );
            return {
                ok: true,
                error: "",
                contract: contract,
            }
        }

        console.error("getContractWithSigner: no signer found");
        return {
            ok: false,
            error: "Please check connection",
            contract: null,
        }
    } return metamask;
}

const _getMetamask = () => {
    const { ethereum } = window;

    if (!ethereum || !ethereum.isMetaMask) {
        console.error("getMetamask: Ethereum not found in browser or it is not Metamask")
        return {
            ok: false,
            error: "Please install metamask",
            metamask: null,
        }
    }

    return {
        ok: true,
        error: "",
        metamask: ethereum,
    }
}

const _getUserAddress = async () => {
    const metamask = _getMetamask();

    if (metamask.ok) {
        const provider = new ethers.providers.Web3Provider(metamask.metamask);
        const signer = await provider.getSigner();
        return await signer.getAddress();
    } return null;
}

const _isNetworkValid = async (metamask) => {
    const requiredChainId = process.env.NEXT_PUBLIC_CHAIN_ID
    const chainId = await metamask.networkVersion;

    if (chainId === requiredChainId) {
        return {
            ok: true,
            error: "",
        };
    }

    console.error(`isNetworkValid: Network ID is not ${requiredChainId}, but ${chainId}`);
    return {
        ok: false,
        error: "Please connect to Goerli network",
    };
}