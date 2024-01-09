import { db } from "@/lib/db";

export const getVerificationTokenByEmail = async (email: string) => {
    try {
        const verification = await db.verificationToken.findFirst({
            where: {
                email
            }
        });


        return verification;
        
    } catch (error) {
        return null;
        
    }
}
export const getVerificationTokenByToken = async (token: string) => {
    try {
        const verification = await db.verificationToken.findUnique({
            where: {
                token
            }
        });


        return verification;
        
    } catch (error) {
        return null;
        
    }
}