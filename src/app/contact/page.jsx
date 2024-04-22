"use client"
import useCurrentUser from "../components/useCurrentUser"
const Page=()=>{
    const { currentUser, loading } = useCurrentUser();

    return(
        <div>
      <h1>Admin Panel</h1>
      {loading ? (
        <p>Loading...</p>
      ) : currentUser ? (
        <div className="d-flex">
ok 
          <div className="w-75">
          Test admine ... 
          </div>
        </div>
      ) : (
        <p>Failed to fetch Admin information. Redirecting to login...</p>
      )}
    </div>
    )
}
export default Page