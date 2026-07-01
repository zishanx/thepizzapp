type User = {
    username: string
    roel: "guest" | "member" | "admin"
}

type UserRole = "guest" | "member" | "admin"

let userRole: UserRole = "guest"


// Learning type narrowing 
//  It's the process fo taking a vairable with a broad type and reducing it  to a more specific type based on runtime checks. 
