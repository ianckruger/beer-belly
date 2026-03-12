export type AuthStackParamList = {
    Login: undefined;
};

export type HomeStackParamList = {
    Home: undefined;
    Details: { id: string } | undefined;
};

export type ProfileStackParamList = {
    Profile: { userId: string } | undefined;
};

export type MainTabParamList = {
    HomeTab: undefined;
    ProfileTab: undefined;
};

export type RootStackParamList = {
    Auth: undefined;
    Main: undefined;
    GlobalModal: undefined;
}