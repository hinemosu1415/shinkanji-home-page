import Overview from '../../../components/Home/overview1'
import testImg from '../../../assets/test3-1.jpg'
import testImg2 from '../../../assets/test3-2.jpg'
import testImg3 from '../../../assets/test3-3.jpg'


function Precinct() {
    const data = [
        { text: "仁王門", image: testImg, alt: "仁王門" },
        { text: "観音堂", image: testImg2, alt: "観音堂" },
        { text: "古墳", image: testImg3, alt: "古墳" },
        { text: "石碑", image: testImg, alt: "石碑" },
        { text: "本堂", image: testImg2, alt: "本堂" }
    ]

    return (
        <main>
            <Overview title="境内の紹介" items={data} link="/" />
        </main>
    )
}

export default Precinct
