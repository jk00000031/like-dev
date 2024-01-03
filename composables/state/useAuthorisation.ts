export const useAuthorisationToken = () => useState<string>("authorisationToken", () => "1");
export const useAuthorisationProfile = () =>
  useState<{ [x: string]: any }>("authorisationProfile", () => ({
    avatar: "https://picsum.photos/128/128",
    nickName: "开发者日记",
    account: "D10000000001",
  }));

export const useCleanAuthorisation = () => {
  const token = useAuthorisationToken();
  const profile = useAuthorisationProfile();

  token.value = "";
  profile.value = {};
};
