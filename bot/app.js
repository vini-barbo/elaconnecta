import {createNewSession} from "./connection/index.js"

const app = async()=> {
    const client = await createNewSession("TESTE")

    client.onMessage((msg) => {
        console.log(msg);
        client.sendText(msg.from, "Fala feio.")
    })
    
}

app()