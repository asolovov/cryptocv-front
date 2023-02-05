import {getContractWithoutSigner, getContractWithSigner} from "@/helpers/ethersHelpers";

export const getTotalLikes = async ({infuraApi}) => {
    const contract = getContractWithoutSigner({infuraApi});

    try {
        const totalLikes = await contract.getTotalLikes();
        return {
            ok: true,
            error: "",
            totalLikes: totalLikes,
        }
    } catch (error) {
        console.error("getTotalLikes: ", error);
        return {
            ok: false,
            error: "Can't get total likes",
            totalLikes: null,
        }
    }

}

export const setLike = async (id) => {
    const contract = await getContractWithSigner();

    if (contract.ok) {
        try {
            const tx = await contract.contract.setLike(id.toString());
            console.log("tx", tx);
            await tx.wait();
            return {
                ok: true,
                error: ""
            }
        } catch (error) {
            if (error.reason === "execution reverted: OnchainCV: you already set like on this case") {
                return {
                    ok: false,
                    error: "You already set like on this case, you can do it only once!",
                }
            } else return {
                ok: false,
                error: "Something went wrong, please try again",
            }
        }
    } return contract;
}