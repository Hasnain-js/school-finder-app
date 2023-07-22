import ProfileLayout from "@/components/ProfileLayout";

function SchoolNotification() {
  return (
    <>
       <h1>School Notification</h1>
    </>
  );
}

SchoolNotification.getLayout = (page) => {
  return <ProfileLayout>{page}</ProfileLayout>;
};
export default SchoolNotification;
