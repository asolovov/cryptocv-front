import {StyleSheet} from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    page: {
        padding: "15px",
    },
    header: {
        backgroundColor: "#6610f2",
        color: "white",
    },
    name: {
        fontSize: "24px",
        marginBottom: "5px",
    },
    position: {
        fontSize: "13px",
        marginBottom: "5px",
    },
    hrIndigo: {
        borderTop: "1px solid #8c4bf5",
        marginBottom: "5px",
        opacity: ".25",
    },
    hrGrey: {
        borderTop: "1px solid #808080",
        marginTop: "5px",
        marginBottom: "5px",
        opacity: ".25",
    },
    description: {
        fontSize: "12px",
        fontWeight: "300",
        lineHeight: "1.2px",
        marginBottom: "10px",
    },
    title: {
        fontSize: "12px",
        color: "#6610f2",
        marginBottom: "10px",
        fontFamily: "Helvetica-Bold"
    },
    text: {
        fontSize: "10px",
        marginBottom: "10px",
    },
    textNoMargin: {
        fontSize: "10px",
    },
    textBold: {
        fontSize: "10px",
        marginBottom: "10px",
        fontFamily: "Helvetica-Bold",
    },
    textBoldIndigo: {
        fontSize: "10px",
        marginBottom: "10px",
        fontFamily: "Helvetica-Bold",
        color: "#6610f2",
    },
    flexRow: {
        flexDirection: "row",
    },
    flexRowMt: {
        flexDirection: "row",
        marginTop: "10px"
    },
    flexRowMr: {
        flexDirection: "row",
        paddingRight: "10px",
    },
    flexCol: {
        flexDirection: "column",
    },
    flexColAuto: {
        flexDirection: "column",
        marginLeft: "auto",
    },
    col2: {
        width: "200px",
    },
    col8: {
        width: "500px",
        marginLeft: "5px",
        marginRight: "10px",
    },
    container: {
        padding: "5px",
    },
    card: {
        padding: "5px",
        border: "1px solid #D3D3D3",
        borderRadius: "5px",
        marginBottom: "10px"
    },
    qr: {
        width: "40px",
        height: "40px",
        borderRadius: "5px",
        margin: "5px",
    }
})