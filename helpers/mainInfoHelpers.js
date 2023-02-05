import {getContractWithoutSigner, getContractWithSigner} from "@/helpers/ethersHelpers";

export const getMainInfo = async ({infuraApi}) => {
    try {
        const contract = getContractWithoutSigner({infuraApi});
        const mainInfoJSON = await contract.getMainInfo();
        const mainInfo = mainInfoJSON ? JSON.parse(mainInfoJSON) : {};
        return {
            ok: true,
            error: "",
            mainInfo: mainInfo,
        }
    } catch (error) {
        console.error("getMainInfo: ", error);
        return {
            ok: false,
            error: "Can't get main info",
            mainInfo: null,
        }
    }
}

export const updateMainInfo = async (mainInfo) => {
    const contract = await getContractWithSigner();

    if (contract.ok) {
        try {
            const mainInfoJSON = JSON.stringify(mainInfo);
            const tx = await contract.contract.updateMainInfo(mainInfoJSON);
            await tx.wait();
            return {
                ok: true,
                error: "",
            }
        } catch (error) {
            console.error("updateMainInfo: ", error);
            return {
                ok: false,
                error: "Something went wrong, please try again",
            }
        }
    } else return contract;
}