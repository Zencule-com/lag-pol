import ClientHomePage from '../components/ClientHomePage';
import { fetchPolitieTrainings, getAllTrainingScheduleOptions } from '../lib/trainings-api';

export default async function Home() {
  const trainings = await fetchPolitieTrainings();
  const scheduleOptions = trainings.length > 0 ? getAllTrainingScheduleOptions(trainings) : undefined;

  return <ClientHomePage scheduleOptions={scheduleOptions} />;
}