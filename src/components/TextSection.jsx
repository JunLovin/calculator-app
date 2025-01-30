import '@styles/TextSection.css'
import CatTyping from '@public/CatTyping.gif'

function TextSection() {
    
    const handleLink = url => {
        window.open(url, "_blank")
    }

    return (
        <>
            <section className="container">
                <section className="text-container">
                    <h1>Calculator App - By <a href="https://github.com/JunLovin" target="_blank">JunLovin</a></h1>
                    <article>
                        <p>
                            Hi friend! If you are reading this means that you click my calculator-app link to see it in live. If it&apos;s is the case I will be so happy. I made it with love!.
                            <br />
                            Btw, if you can help me improving my code or you just give me feedback, you can enter to my GitHub and open a pull request. I will review all PR&apos;s!.
                            <br />
                            <br />
                        </p>
                            <b>-<span> JunLovin</span></b>
                    </article>
                </section>
                <article className="gif-container">
                    <img
                        src={CatTyping}
                        onClick={() => handleLink('https://giphy.com/gifs/digital-VekcnHOwOI5So')}
                    />
                </article>
            </section>
        </>
    )
}

export default TextSection;