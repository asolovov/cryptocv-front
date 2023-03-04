import {Document, Page, Text, View, Image, Link} from "@react-pdf/renderer";
import {styles} from "@/components/pdf/PDFStyles";
import PDFSkills from "@/components/pdf/PDFSkills";
import PDFCase from "@/components/pdf/PDFCase";

const PDF = ({mainInfo, cases, baseURL}) => {
    const {location, contacts, skills, name, position, helloPDF, background, education} = mainInfo;
    const {email, tg, github, linkedIn} = contacts;

    return (
        <Document>
            <Page style={styles.page} size={"A4"}>
                <View style={styles.header}>
                    <View style={styles.flexRow}>
                        <View style={styles.col2}>
                            <Image src={`${baseURL}/av.jpg`} alt={"av"}/>
                        </View>
                        <View style={styles.col8}>
                            <View style={styles.flexRow}>
                                <View style={styles.flexCol}>
                                    <Text style={styles.name}>
                                        {name}
                                    </Text>
                                    <Text style={styles.position}>
                                        {position}
                                    </Text>
                                </View>
                                <View style={styles.flexColAuto}>
                                    <Image src={`${baseURL}/cv-qr.png`} alt={"qr-code"} style={styles.qr}/>
                                </View>
                            </View>
                            <View style={styles.hrIndigo}/>
                            <Text style={styles.description}>
                                {helloPDF}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={styles.flexRowMt}>
                    <View style={styles.col2}>
                        <Text style={styles.title}>LOCATION</Text>
                        <View style={styles.hrIndigo}/>
                        <Text style={styles.text}>{location}</Text>
                        <Text style={styles.title}>CONTACTS</Text>
                        <View style={styles.hrIndigo}/>
                        <View style={styles.flexRow}>
                            <Text style={styles.textBold}>Email: </Text>
                            <Text style={styles.text}>{email.value}</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.textBold}>Telegram: </Text>
                            <Link style={styles.text} src={tg.link}>{tg.value}</Link>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.textBold}>Github: </Text>
                            <Link style={styles.text} src={github.link}>{github.value}</Link>
                        </View>
                        <View style={styles.flexRow}>
                            <Text style={styles.textBold}>Linkedin: </Text>
                            <Link style={styles.text} src={linkedIn.link}>{linkedIn.value}</Link>
                        </View>
                        <Text style={styles.title}>SKILLS</Text>
                        <View style={styles.hrIndigo}/>

                        <PDFSkills skills={skills}/>

                    </View>
                    <View style={styles.col8}>
                        <Text style={styles.title}>CASES</Text>
                        <View style={styles.hrIndigo}/>

                        {cases.map((element, index) =>
                            <PDFCase key={index} caseEl={element}/>
                        )}

                        <Text style={styles.title}>BACKGROUND</Text>
                        <View style={styles.hrIndigo}/>
                        <Text style={styles.text}>{background}</Text>

                        <Text style={styles.title}>EDUCATION</Text>
                        <View style={styles.hrIndigo}/>
                        <View style={styles.container}>

                            {education.map((value, index) =>
                                <View key={index}>
                                    <Text style={styles.textNoMargin}>{value.year} {value.description}</Text>
                                    <View style={styles.hrGrey}/>
                                </View>
                            )}

                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDF;