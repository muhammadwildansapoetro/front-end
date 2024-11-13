import supabase from "@/services/supabase"

export const signInWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            queryParams: {
                access_type: "offline",
                prompt: "consent",
            },
        },
    });

    console.log(data);


    if (error) {
        console.log("Error during Google sign-in", error.message);

    }
}

