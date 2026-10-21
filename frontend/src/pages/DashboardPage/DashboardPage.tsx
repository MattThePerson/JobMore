import * as S from "./DashboardPage.styled";
import { useQuery } from "@tanstack/react-query";
import applicationService from "../../services/applicationService";
import JobApplicationCard from "../../components/JobApplicationCard/JobApplicationCard";

const KEY = "applications";

/* DashboardPage */
const DashboardPage = () => {
  const appsQuery = useQuery({
    queryKey: [KEY],
    queryFn: applicationService.getAll,
  });

  if (appsQuery.isPending) {
    return <div>loading</div>;
  }

  if (appsQuery.isError) {
    return <div>failed :/</div>;
  }

  const applications = appsQuery.data;

  return (
    <S.Base data-testid="DashboardPage">
      <h2>Dashboard</h2>
      {applications.map((app) => (
        <JobApplicationCard key={app.id} data={app} />
      ))}
    </S.Base>
  );
};

export default DashboardPage;
