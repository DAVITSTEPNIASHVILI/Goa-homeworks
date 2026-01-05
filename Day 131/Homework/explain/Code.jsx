// 1. 1) თქვენი სიტყვებით ახსენით როგორ მუშაობს useState და useEffect კაუჭები და მათი რამდენიმე მაგალითი ჩამოწერეთ

import { useEffect, useState } from "react"

const Code = () => {
    const [count, setCount] = useState()

    useEffect(() => {
        console.log(count)
    }, [])

    useEffect(() => {
        console.log(count)
    }, [count])
}

const smth = () => {
    const [counter, setCounter] = useState(0)
    setCounter(counter + 1) 
}