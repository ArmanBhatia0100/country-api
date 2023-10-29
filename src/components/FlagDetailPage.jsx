import { useParams } from "react-router-dom";
import Countries from "../data/data.json";

const FlagDetailPage = () => {
  const params = useParams();

  const countryDetail = Countries.find(
    (country) => country.alpha2Code === params.alpha2Code
  );

  console.log(countryDetail);

  return <div>This is detail page</div>;
};

export default FlagDetailPage;
