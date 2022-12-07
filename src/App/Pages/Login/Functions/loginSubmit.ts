
export function submitLogin(e: { preventDefault: () => void; }, loginObj: { email: string; pwd: string; }) {
  e.preventDefault();
  const hasWrongStructure =
    typeof loginObj?.email !== "string" || typeof loginObj?.pwd !== "string";
  if (hasWrongStructure) {
    throw new Error(
      "submitLogin function says: parameter must be an object with email and pwd as strings"
    );
  }
}
