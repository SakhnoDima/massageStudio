import Container from "./components/core/Container";
import Title from "./components/core/Title";
import SubTitle from "./components/core/SubTitle";

export default function Home() {
    return (
        <div>
            <section className="bg-[url('/leaves.jpg')] bg-cover bg-center h-screen flex items-center justify-center">
                <h1 className="text-4xl font-bold text-center mt-20">
                    Welcome to Our Massage Studio
                </h1>
            </section>
            <Container>
                <div className="py-[50px]">
                    <SubTitle className={"uppercase text-center pb-4"}>
                        Процедури
                    </SubTitle>
                    <Title className={"uppercase text-center"}>
                        <span className="text-primeGreen">Наші</span>
                        <span className="text-[#fd8053d0]"> послуги</span>
                    </Title>
                </div>
            </Container>
        </div>
    );
}
