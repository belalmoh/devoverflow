import { auth, signOut } from "@/auth";
import { redirect } from "next/navigation";
import ROUTES from "@/constants/routes";
import { Button } from "@/components/ui/button";

const Home = async () => {
    const session = await auth();

    console.log(session);

    if (!session?.user) {
        redirect(ROUTES.SIGN_IN);
    }

    const handleSignOut = async () => {
        "use server";
        await signOut({
            redirectTo: ROUTES.SIGN_IN,
        });
    };

    return (
        <>
            <h1 className="h1-bold">Welcome to DevOverflow</h1>

            <form className="px-10 pt-[100px]" action={handleSignOut}>
                <Button type="submit">Sign Out</Button>
            </form>
        </>
    );
};

export default Home;
