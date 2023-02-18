import prisma from '.'

export async function createUser(credentials) {
    try {
        await prisma.user.create({
            data: {
                email: credentials.email,
                password: credentials.password,
                name: credentials.username,
            }
        })
        return {err: false, msg: 'Success'}    
    } catch(e) {
        return {err: true, msg: e.code}
    }
}

export async function getUser(credentials) {
    try {
        console.log(credentials)
        const retrive = await prisma.user.findFirst({
            where: {
                name: credentials.name
            },
        })
        return {err: false, msg: 'Retrived', data: retrive }
    } catch(e) {
        return {err: true, msg: 'Something went wrong', e }
    }
}