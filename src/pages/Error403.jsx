import ErrorPage from "../components/ErrorPage";

export default function Error403() {
  return (
    <ErrorPage
      code="403"
      message="Forbidden"
      image="https://cdn-icons-png.flaticon.com/512/2748/2748559.png"
    />
  );
}