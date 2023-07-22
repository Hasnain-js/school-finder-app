import ProfileLayout from "@/components/ProfileLayout";

function SchoolAccount() {
  return (
    <>
      <h1>School Account</h1>
    </>
  );
}

SchoolAccount.getLayout = (page) => {
  return <ProfileLayout>{page}</ProfileLayout>;
};
export default SchoolAccount;
