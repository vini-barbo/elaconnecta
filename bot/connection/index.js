import wppconnect from '@wppconnect-team/wppconnect'

export const createNewSession = async (session, onStatusFind) => {
    try {
        // const __dirname = await dirname()

        // const pathForsave = path.join(__dirname, '..')

        const client = await wppconnect.create({
            session,
            statusFind: onStatusFind,
            catchQR: (base64Qr, asciiQR) => {
                console.log(asciiQR) // Optional to log the QR in the terminal
                let matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
                    response = {}

                if (matches.length !== 3) {
                    return new Error('Invalid input string')
                }
                response.type = matches[1]
                response.data = new Buffer.from(matches[2], 'base64')

                //var imageBuffer = response

                // fs.writeFile(
                //     pathForsave + '/qrCode/out.png',
                //     imageBuffer['data'],
                //     'binary',
                //     function (err) {
                //         if (err != null) {
                //             console.log(err)
                //         }
                //     }
                // )
                // fs.readFile(pathForsave + '/qrCode/out.png', (error, data) => {
                //     if (error) {
                //         console.error('Erro ao ler a imagem:', error)
                //         return error
                //     } else {
                //         const imageData = data.toString('base64')
                //         io.emit('enviar-imagem', imageData)
                //     }
                // })
            },
            puppeteerOptions: {
                userDataDir: `./tokens/${session}`,
                args: [
                    "--no-sandbox",
                    "--disable-setuid-sandbox",
                    "--disable-dev-shm-usage",
                    "--disable-accelerated-2d-canvas",
                    "--no-first-run",
                    "--no-zygote",
                    "--disable-gpu",
                ],
            },
            logQR: false,
        })

        return client
    } catch (error) {
        throw new Error('Session not created')
    }
}