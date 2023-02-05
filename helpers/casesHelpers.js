import {getContractWithoutSigner, getContractWithSigner} from "@/helpers/ethersHelpers";

export const getCases = async ({infuraApi}) => {
    const contract = getContractWithoutSigner({infuraApi});
    let cases = [];
    let respond = {};

    try {
        const Cases = await contract.getCases();
        for (let i = 0; i < Cases.length; i++) {
            const element = Cases[i];
            const info = JSON.parse(element.info)

            cases.push({
                id: element.id.toString(),
                info: info,
                startDate: element.startDate.toString(),
                endDate: element.endDate.toString(),
                likes: element.likes.toString(),
            })
        }
        respond.ok = true;
        respond.error = "";
    } catch (error) {
        respond.ok = false;
        respond.error = "Can't get cases";
        console.error("getCases: ", error);
    }

    respond.cases = cases;
    return respond;
}

export const addCase = async (info, startDate, endDate) => {
    const contract = await getContractWithSigner();

    if (contract.ok) {
        const infoJSON = JSON.stringify(info);

        try {
            const tx = await contract.contract.addCase(infoJSON, startDate, endDate);
            await tx.wait();
            return {
                ok: true,
                error: "",
            }
        } catch (error) {
            console.error("addCase: transaction error", error);
            return {
                ok: false,
                error: "Something went wrong, please try again",
            }
        }
    } return contract;
}

export const updateCase = async (id, info, startDate, endDate) => {
    const contract = await getContractWithSigner();

    if (contract.ok) {
        try {
            const infoJSON = JSON.stringify(info);
            const tx = await contract.contract.updateCase(id.toString(), infoJSON, startDate.toString(), endDate.toString());
            await tx.wait();
            return {
                ok: true,
                error: "",
            }
        } catch (error) {
            console.error("updateCase: ", error);
            return {
                ok: false,
                error: "Something went wrong, please try again",
            }
        }
    } return contract;
}

export const deleteCase = async (id) => {
    const contract = await getContractWithSigner();

    if (contract.ok) {
        try {
            const tx = await contract.removeCase(id.toString());
            await tx.wait();
            return {
                ok: true,
                error: "",
            }
        } catch (error) {
            console.error("deleteCase: ", error);
            return {
                ok: false,
                error: "Something went wrong, please try again",
            }
        }
    } return contract;
}