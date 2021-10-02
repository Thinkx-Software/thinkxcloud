import Card from '@material-tailwind/react/Card';
import CardImage from '@material-tailwind/react/CardImage';
import CardBody from '@material-tailwind/react/CardBody';
import Icon from '@material-tailwind/react/Icon';
import H4 from '@material-tailwind/react/Heading4';
import H6 from '@material-tailwind/react/Heading6';
import LeadText from '@material-tailwind/react/LeadText';
import Paragraph from '@material-tailwind/react/Paragraph';
import Fade from 'react-reveal/Fade';

export default function WorkingSection() {
    return (
        <section className="pb-20 bg-gray-100 -mt-32">
            <div className="container max-w-7xl mx-auto px-4">
                

                <div className="flex flex-wrap items-center mt-32">
                <Fade left cascade>
                <div className="w-full md:w-5/12 px-4 mx-auto">
                        <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                            <Icon name="people" size="3xl" />
                        </div>
                        <H4 color="gray">Hosting  with us is a pleasure</H4>
                        <LeadText color="blueGray">
                            Don't let this opportunity by pass.Host with us we got all what 
                            it needs to help you and give you 24 hour support
                        </LeadText>
                        <LeadText color="blueGray">
                        We make it easy to lanch your site with great customer support. With our prices you can always find a suitable package, 
                        We have an opt out option with money back guarantee within 30 days no othe
                        </LeadText>
                        <div className="m-4">
                            <h1 className="md:ml-5 rounded-full  p-2 cursor-pointer text-center w-48 text-gray-900 bg-gray-200
                              hover:bg-blue-700 hover:text-white">Start Hosting Now</h1>
                        </div>
                    </div>
                </Fade>
                    


                    <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
                        <Fade right cascade>
                        <Card>
                            <CardImage alt="Card Image" src="/assets/logo1.jpeg" />
                            <CardBody>
                                <H6 color="gray">Thinkx Cloud Team</H6>
                                <Paragraph color="blueGray">
                                We are proud to boast an international team of employees 
                                who make Thinkx Cloud great.
                                 Available 24x7x365.
                                </Paragraph>
                            </CardBody>
                        </Card>
                        </Fade>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
