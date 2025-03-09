import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ROUTES from "@/constants/routes";

const Home = async () => {
    const session = await auth();

    console.log(session);

    if (!session?.user) {
        redirect(ROUTES.SIGN_IN);
    }

    return (
        <>
            <h1 className="h1-bold">Welcome to DevOverflow</h1>
        </>
    );
};

export default Home;
