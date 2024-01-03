export const useAuthorisationToken = () => useState<string>("authorisationToken", () => "1");
export const useAuthorisationProfile = () => useState<{ [x: string]: any }>("authorisationProfile", () => ({}));

export const useCleanAuthorisation = () => {
  const token = useAuthorisationToken();
  const profile = useAuthorisationProfile();

  token.value = "";
  profile.value = {};
};
