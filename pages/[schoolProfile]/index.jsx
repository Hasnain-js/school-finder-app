import ProfileLayout from "@/components/ProfileLayout";

function SchoolProfile() {
  return (
    <>
      <h1>School profile</h1>
    </>
  );
}

SchoolProfile.getLayout = (page) => {
  return <ProfileLayout>{page}</ProfileLayout>;
};
export default SchoolProfile;
