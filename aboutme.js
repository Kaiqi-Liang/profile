const aboutme = document.getElementById('aboutme')
document.getElementById('dropdown').addEventListener('click', (event) => {
    if (aboutme.innerText === "") {
        const p = document.createElement('p')
            p.innerText = "Hey guys my name is Kaiqi but you can call me Kai. I am studying computer science and I have been involved in CSESoc throughout the year which motivated me to run for Arc Delegate. During O week and welcome week I volunteered at the CSESoc stall. It was a great experience telling people about the society. In trimester 1 I was a part of the peer mentoring program. As a peer mentor I was able to give the first years all the help and support I can offer which I found it really rewarding. In trimester 2 I became a subcommittee member in CSESoc's media portfolio. The biggest project I have worked on was a podcast episode with everyone's favourite lecturers Andrew Taylor and John Shepherd. The upcoming episode will be with the CSE Thesis Coordinator Hui Wu, stay tuned to find out what doing a thesis is like. CSESoc has given me so much this year, if I have the chance to be the Arc Delegate for next year I would very much like to contribute to help make the society the better CSESoc deserves"
            aboutme.appendChild(p)
    } else {
        aboutme.removeChild(document.querySelector('p'))
    }
})
