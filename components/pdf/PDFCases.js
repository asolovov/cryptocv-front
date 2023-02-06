import {Text, View} from "@react-pdf/renderer";
import {styles} from "@/components/pdf/PDFStyles";

const PdfCases = ({cases}) => {
    return (
        <>
            {cases.map((element, index) =>
                <View key={index} style={styles.card}>
                    <Text style={styles.textBold}>{element.info.name}</Text>
                    <View style={styles.flexRow}>
                        <View style={styles.flexRowMr}>
                            <Text style={styles.textBoldIndigo}>Team: </Text>
                            <Text style={styles.text}>{element.info.team}</Text>
                        </View>
                        <View style={styles.flexRowMr}>
                            <Text style={styles.textBoldIndigo}>Start date: </Text>
                            <Text style={styles.text}>2022-08-28</Text>
                        </View>
                        <View style={styles.flexRowMr}>
                            <Text style={styles.textBoldIndigo}>End date: </Text>
                            <Text style={styles.text}>2022-09-11</Text>
                        </View>
                    </View>
                    <Text style={styles.textBoldIndigo}>My performance:</Text>
                    <Text style={styles.text}>QA: test cases with TS hardhat framework, contract bug fix, full flow test</Text>

                    <Text style={styles.textBoldIndigo}>Description:</Text>
                    <Text style={styles.text}>The contract implemented the ERC721 standard in the ERC721A variant. For mechanics that we have implemented, we usually take ERC1155 standard, but ERC721 was a mandatory requirement of the customer. Due to the unusual implementation, contract testing was a challenge, which we passed with dignity.</Text>

                    <Text style={styles.textBoldIndigo}>Features:</Text>
                    <Text style={styles.textNoMargin}>Public and private sale</Text>
                    <View style={styles.hrGrey}/>
                    <Text style={styles.textNoMargin}>Deny-listing addresses</Text>
                    <View style={styles.hrGrey}/>
                    <Text style={styles.textNoMargin}>Freezing collection</Text>
                    <View style={styles.hrGrey}/>
                    <Text style={styles.textNoMargin}>Editions of ERC721 tokens</Text>
                    <View style={styles.hrGrey}/>
                </View>
            )}
        </>
    );
};

export default PdfCases;