import { createUser } from "lib/prisma/user"

const handler = async (req, res) => {
    if(req.method === 'POST') {
        try {
            const data = JSON.parse(req.body)
            // console.log(data)
            const feedback = await createUser(data)
            // console.log(feedback)
            
            if(feedback.err) throw(feedback)
            
            return res.status(200).json({ feedback })
        } catch (e) {
            return res.status(500).json({ e })
        }
    }
}

export default handler