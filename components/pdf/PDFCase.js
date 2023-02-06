import {Text, View, Link} from "@react-pdf/renderer";
import {styles} from "@/components/pdf/PDFStyles";

const PdfCase = ({caseEl}) => {
    const {info} = caseEl;
    const {features, performance} = info;

    const startDate = new Date(caseEl.startDate*1000).toISOString().split('T')[0];
    const endDate =
        isNaN(caseEl.endDate) || caseEl.endDate === "0"
            ? "In progress..."
            : new Date(caseEl.endDate*1000).toISOString().split('T')[0];


    return (
        <View style={styles.card} >
            {info.link ? <Link src={info.link} style={styles.textBold}>{info.name}</Link> : <Text style={styles.textBold}>{info.name}</Text>}
            <View style={styles.flexRow}>
                <View style={styles.flexRowMr}>
                    <Text style={styles.textBoldIndigo}>Team: </Text>
                    <Text style={styles.text}>{info.team}</Text>
                </View>
                <View style={styles.flexRowMr}>
                    <Text style={styles.textBoldIndigo}>Start date: </Text>
                    <Text style={styles.text}>{startDate}</Text>
                </View>
                <View style={styles.flexRowMr}>
                    <Text style={styles.textBoldIndigo}>End date: </Text>
                    <Text style={styles.text}>{endDate}</Text>
                </View>
            </View>

            <Text style={styles.textBoldIndigo}>My performance:</Text>
            {performance.split("; ").map((value, index) =>
                <Text key={index} style={styles.text}>{value}</Text>
            )}

            <Text style={styles.textBoldIndigo}>Description:</Text>
            <Text style={styles.text}>{info.description}</Text>

            <Text style={styles.textBoldIndigo}>Features:</Text>
            {features.map(value =>
                <>
                    <Text style={styles.textNoMargin}>{value}</Text>
                    <View style={styles.hrGrey}/>
                </>
            )}

        </View>
    );
};

export default PdfCase;