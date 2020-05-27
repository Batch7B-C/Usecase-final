package com.cts.project.model;



public class User {

	@Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", email=" + email + ", usertype=" + usertype
				+ "]";
	}
	private String username;
	private String password;
	private String email; 
	private String usertype;
	
	public User() {}
	public User( String email, String username, String password, String usertype) {
		super();
	
		this.email = email;
		this.username = username;
		this.password = password;
		this.usertype = usertype;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	
	
	
}
