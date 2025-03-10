const ROUTES = {
    HOME: "/",
    SIGN_IN: "/sign-in",
    SIGN_UP: "/sign-up",
    COMMUNITY: "/community",
    COLLECTIONS: "/collections",
    JOBS: "/jobs",
    TAGS: (id: string) => `/tags/${id}`,
    PROFILE: (id: string) => `/profile/${id}`,
    ASK_QUESTION: "/ask-question",
    QUESTION: (id: string) => `/question/${id}`,
};

export default ROUTES;
