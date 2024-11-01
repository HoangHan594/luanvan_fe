const hiddenRoutes = [{
        path: "/appheader",
        component: () =>
            import ("@/components/admin/AppHeader.vue"),
    },
    {
        path: "/bookdetail",
        component: () =>
            import ("@/components/admin/BookDetail.vue"),
    },
    {
        path: "/booklist",
        component: () =>
            import ("@/components/admin/BookList.vue"),
    },
    {
        path: "/inputsearch",
        component: () =>
            import ("@/components/admin/InputSearch.vue"),
    },
    {
        path: "/readerDetail",
        component: () =>
            import ("@/components/admin/ReaderDetail.vue"),
    },
    {
        path: "/readerlist",
        component: () =>
            import ("@/components/admin/ReaderList.vue"),
    },
    {
        path: "/client-app-footer",
        component: () =>
            import ("@/components/client/ClientAppFooter.vue"),
    },
    {
        path: "/client-app-header",
        component: () =>
            import ("@/components/client/ClientAppHeader.vue"),
    },
    {
        path: "/client-bookdetail",
        component: () =>
            import ("@/components/client/ClientBookDetail.vue"),
    },
    {
        path: "/client-booklist",
        component: () =>
            import ("@/components/client/ClientBookList.vue"),
    },
    {
        path: "/client-inputsearch",
        component: () =>
            import ("@/components/client/ClientInputSearch.vue"),
    }
];

export default hiddenRoutes;