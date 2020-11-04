import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Link} from "@material-ui/core";

const useStyles = makeStyles({
    projectWork: {
        background: '#ebeeee',
        paddingTop: '90px',
        paddingBottom: '60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems:'center',
        "& h1": {
            fontSize: '1.5rem',
            fontFamily: 'opensans-bold',
            letterSpacing: '1px',
            marginBottom: '48px',
            color: '#95A3A3'
        },
        "& h3": {
            fontFamily: 'opensans-bold',
            letterSpacing: '1px'
        },
        "& p": {
            paddingTop: '3rem',
            textAlign: 'start',
            width: '70%',
            color: '#758080'
        },
        "& h6": {
            alignSelf: 'flex-start',
            paddingLeft: '15rem',
            fontFamily: 'opensans-bold',
            letterSpacing: '1px'
        }
    },
    webSite: {
        paddingLeft: '50%',
        "& a": {
            textAlign: 'center',
            borderBottom: 'solid'
        }
    },
    codeSampleDesign: {
        lineHeight: '2rem',
        fontSize: '12px',

    }
})


const codeSample = "" +
    "                    @Controller\n" +
    "                    public class ArticleController {\n" +
    "                        @RequestMapping(\"/articleSelected\")\n" +
    "                            public ModelAndView article(@RequestParam(\"articleTitle\") String articleTitle, @RequestParam(\"categoryType\") String categoryType) {\n" +
    "                            ModelAndView article_model = new ModelAndView();\n" +
    "                            System.out.println(categoryType);\n" +
    "                            String key  = categoryType + \"/\" + articleTitle + \".docx\" ;\n" +
    "                            List<XWPFParagraph> paraList = null;\n" +
    "                            List<XWPFPictureData> pic = null;\n" +
    "                            ArrayList<String> imagesInFile = new ArrayList<String>();\n" +
    "                            try {\n" +
    "                            System.out.println(articleTitle);\n" +
    "                            BasicAWSCredentials awsCreds = new BasicAWSCredentials(\"**********\", \"*****\");\n" +
    "                            AmazonS3 s3Client = AmazonS3ClientBuilder.standard().withCredentials(new AWSStaticCredentialsProvider(awsCreds)).withRegion(\"us-east-2\").build();\n" +
    "                            S3Object object = s3Client.getObject(new GetObjectRequest(\"vasiblog\", key));\n" +
    "                            InputStream objectData = object.getObjectContent();\n" +
    "                            XWPFDocument docx = new XWPFDocument(objectData);\n" +
    "                            String baseHtml = \"\";\n" +
    "                            Document doc = Jsoup.parse(baseHtml);\n" +
    "                            String imagePath = null;\n" +
    "                            String base64Image = null;\n" +
    "                            pic = docx.getAllPictures();\n" +
    "                            Iterator<XWPFPictureData> iterator = pic.iterator();\n" +
    "                            while(iterator.hasNext()) {\n" +
    "                            XWPFPictureData pic1 = iterator.next();\n" +
    "                            byte[] bytepic = pic1.getData();\n" +
    "                            base64Image = Base64.getEncoder().encodeToString(bytepic);\n" +
    "                            imagesInFile.add(base64Image);\n" +
    "                        }\n" +
    "                            paraList = docx.getParagraphs();\n" +
    "                            int imageCount = 0;\n" +
    "                            String a = new String();\n" +
    "                            for(int i=0;i<paraList.size();i++) {\n" +
    "                            a = paraList.get(i).getText();\n" +
    "                            if(a.isEmpty()) {\n" +
    "                            imagePath = \"data:image/jpg;base64,\"+ imagesInFile.get(imageCount);\n" +
    "                            doc.body().appendElement(\"img\").attr(\"src\", imagePath).attr(\"class\", \"img-fluid\").attr(\"width\",\"100\").attr(\"height\",\"70\");\n" +
    "                            imageCount++;\n" +
    "                        }\n" +
    "                            if(i == 0) {\n" +
    "                            article_model.addObject(\"articleTitle\", a);\n" +
    "                            doc.body().appendElement(\"br\");\n" +
    "                        } else {\n" +
    "                            doc.body().appendElement(\"a\").appendText(a).addClass(\"articleText\");\n" +
    "                            doc.body().appendElement(\"br\");\n" +
    "                        }\n" +
    "                        }\n" +
    "                            docx.close();\n" +
    "                            article_model.addObject(\"articleText\", doc.toString());\n" +
    "                            article_model.setViewName(\"articlePage\");\n" +
    "                            return article_model;\n" +
    "                        } catch (FileNotFoundException e) {\n" +
    "                            e.printStackTrace();\n" +
    "                        } catch (IOException e) {\n" +
    "                            e.printStackTrace();\n" +
    "                        }\n" +
    "                            return null;\n" +
    "                        }\n" +
    "                            @Bean\n" +
    "                            public MappingJackson2HttpMessageConverter mappingJackson2HttpMessageConverter() {\n" +
    "                            ObjectMapper mapper = new ObjectMapper();\n" +
    "                            mapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);\n" +
    "                            MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter(\n" +
    "                            mapper);\n" +
    "                            return converter;\n" +
    "                        }\n" +
    "                        }"

export function ProjectWork() {

    const classes = useStyles();

    return (

        <div className={classes.projectWork}>

            <h1>CHECK OUT SOME OF MY WORK.</h1>

            <h3>PROJECT:  VASISHTA BLOGS</h3>
            <Link
                href={"http://ec2-3-12-225-3.us-east-2.compute.amazonaws.com/"}
                className={classes.webSite}>
                <a>Click here to browse the site</a>
            </Link>

            <p>
                This website was created with basic HTML, CSS and JSP pages.
                Website is launched in AWS and uses, AWS EC2, AWS S3 bucket
                services. It is created in such a way that the author can simply
                upload his blog as a word document in a private S3 bucket and
                the server first gets the names of all the files in a category
                and displays them. When user clicks on any blog title, it then
                fetches and process the word document and displayed as plain
                HTML file.
            </p>

            <h6>
               Below is some of the coding related to the word processing:
            </h6>

            <code>
                <pre className={classes.codeSampleDesign}>

                    {codeSample}

                </pre>
            </code>

        </div>
    )

}