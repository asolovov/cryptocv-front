import {renderToBuffer} from "@react-pdf/renderer";
import {getMainInfo} from "@/helpers/mainInfoHelpers";
import {getCases} from "@/helpers/casesHelpers";
import PDFLayout from "@/components/pdf/PDF";

export default async function handler(req, res) {
  const infuraApi = process.env.INFURA_API;
  const baseUrl = process.env.BASE_URL;
  const mainInfo = await getMainInfo(infuraApi);
  const cases = await getCases(infuraApi);

  const buffer = await renderToBuffer(<PDFLayout mainInfo={mainInfo.mainInfo} cases={cases.cases} baseURL={baseUrl}/>);
  res.end(buffer)
}
