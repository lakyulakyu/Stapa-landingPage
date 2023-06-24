import { useState } from "react";

const EditPasswordPage = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan validasi password
    if (newPassword !== confirmPassword) {
      alert("Password baru dan konfirmasi password tidak sesuai");
      return;
    }

    // Lakukan pengiriman data ke server atau lakukan perubahan password di sini
    console.log("Password berhasil diubah");
  };

  return (
    <div className="h-screen  bg-gray-100 z-30 flex -mt-32 flex-col justify-center ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                <h2 className="leading-relaxed">Ubah Password</h2>
              </div>
            </div>
            <form className="mt-10" onSubmit={handleSubmit}>
              <div className="relative">
                <label htmlFor="currentPassword" className="text-gray-700">
                  Password Sekarang
                </label>
                <input
                  type="password"
                  id="currentPassword"
                  name="currentPassword"
                  className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="mt-7">
                <label htmlFor="newPassword" className="text-gray-700">
                  Password Baru
                </label>
                <input
                  type="password"
                  id="newPassword"
                  name="newPassword"
                  className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="mt-7">
                <label htmlFor="confirmPassword" className="text-gray-700">
                  Konfirmasi Password Baru
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="w-full px-4 py-2 mt-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="mt-7">
                <button
                  type="submit"
                  className="py-2 px-4 bg-blue-500 hover:bg-blue-600 focus:ring-blue-300 text-white rounded-lg w-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPasswordPage;
