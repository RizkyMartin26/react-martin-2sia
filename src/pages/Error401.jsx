import ErrorPage from "../components/ErrorPage";

export default function Error401() {
  return (
    <ErrorPage
      code="401"
      message="Unauthorized"
      image="https://cdn-icons-png.flaticon.com/512/2748/2748560.png"
    />
  );
}