import ProfileLayout from "@/components/ProfileLayout";

function SchoolProfile() {
  return (
    <>
      <div className="p-2">
        <h4 className="font-medium text-gray-800">Description</h4>
        <p className="text-sm font-medium max-w-lg text-LightGreyText">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore,
          error? Iste corporis eveniet nihil nam earum eligendi repudiandae
          aspernatur? Consequuntur ut omnis accusamus non tenetur veritatis
          neque officiis nobis molestiae!
        </p>
        <div className="grid max-w-md grid-cols-2 grid-rows-2 border gap-y-4 p-5 mt-4 border-romance rounded-lg">
          <div className="border-b border-romance pb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              3.5k
            </h4>
            <p className="text-sm font-medium text-LightGreyText">Followers</p>
          </div>
          <div className="border-b border-romance pb-4">
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              3.6k
            </h4>
            <p className="text-sm font-medium text-LightGreyText">Post</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              3.8k
            </h4>
            <p className="text-sm font-medium text-LightGreyText">Collection</p>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200">
              4.1k
            </h4>
            <p className="text-sm font-medium text-LightGreyText">Followers</p>
          </div>
        </div>
      </div>
    </>
  );
}

SchoolProfile.getLayout = (page) => {
  return <ProfileLayout>{page}</ProfileLayout>;
};
export default SchoolProfile;
