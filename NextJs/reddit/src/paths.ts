const paths = {
    home() {
        return '/';
    },
    topicShow(topicsSlug: string) {
        return `/topics/${topicsSlug}`;
    },
    postCreate(topicSlug: string) {
        return `/topics/${topicSlug}/posts/new`;
    },
    postShow(topicSlug: string, postId: string) {
        return `/topics/${topicSlug}/posts/${postId}`;
    }
};

export default paths;