import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyAn_p5uylEdwoCmcxyOifH5Tuu5lD8u9Yk",
    authDomain: "retro-collection-d1e64.firebaseapp.com",
    databaseURL: "https://retro-collection-d1e64.firebaseio.com",
    projectId: "retro-collection-d1e64",
    storageBucket: "retro-collection-d1e64.appspot.com",
    messagingSenderId: "183380534344"
  };
  var fire = firebase.initializeApp(config);

/* Create service account for Node.js */
/*var admin = require("firebase-admin");

admin.initializeApp({
  credential: admin.credential.cert(
	{
	  "type": "service_account",
	  "project_id": "retro-collection-d1e64",
	  "private_key_id": "123d5adb6871efcfd4e2398fc507cec1d69a030a",
	  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCfgA2FRbqt2n55\n49MeCp97YcFe8HLFnh0BSOMdtDzu9w7UWQdJ0t0yFdVc0UB9oNr/eZ7uRbye3RI1\n3O3DoLfyYXszmVUzAhnzxAdaiPITiD4wTQfrvRnLI2KW0ZZ0klyHqid6RQTNRdst\noAGMC1r3iLpXxclFKA7mtRZWCjt9Z6EKJTr3Cf2yi7Qnbre369S3ChSzRzMPiNoL\nAtLhsq9PdF/A0WdpCJhnb8Yzzuy7Ap85BcUZt5mrf8mc9WY0Sgq4ER9ey6qOQgQW\nfp778acRPYqiu8ecNoYw4E77cyyvYsvDxVDpwqnne60fmnPibjtx+jno5t+ksW6k\n6r12VhJFAgMBAAECggEAHcaPf5o5U9xOsR2NW3XbOPLSYRFdM7QlMQi00WZE282G\nWLD4EdmKDqAR0T6FHg7J41iGiW++Wx/lFuYUAum9fUOidssAo0GYq6+kOcwH+Qp9\npZGz0VffeVM1Q/eDcWajXHYw4XwB/fo1BQryTv0Nsdk2BE25ma31Pi9/KHfHjEzg\n482cdDXfXgt2GAHWyTTAeJmNXIkMVyv0FfeaFmiUwzgqA5fmFEbbG0VemvkcsA6H\nBhukHI7S2n9T7syifCJBCrKjxQilaW2mTUvFZsxNojH9Q6WdLEwtSfLsYc5TBQab\niKZCYHkwtq8l2e/qWOu+53kd17hS6AHkgJPYg7ykTwKBgQDgBx7JqM9ZuZva1IL2\nAp9fz8KqGB9Rrj5oAs++Pp6WcaBn5R3VqWM6ZIy3k7Fs7rUwuC5Kks6DulUoRhzM\nfw0iaQkdxBIcWzUzzZnhy66BMrfoTFK9RenyBYuhCtEcpQejW4dKJC9G2AOyZ7c4\nSDGypd7WKT2a1S3YD2qW7q6Z1wKBgQC2Q2jdopbtFYii4RKODidKiNi0v/7BifY1\nb8Apl7aHqmMGD33CL1zl3ErVnsAm5aXd+bKi9ZTIc8CLeHW0odCmtiyqo4kojAT7\nqYgPgPlZT936WnOG/F56Uy/4l/Nzr41FRwzNGWMcQTgraF6Dfecf3fyKWOMp/903\nw/oYn7bJQwKBgA746tnXamQ4v23UnhwK+NPSctQjYJR47LrO1UuFq9uqJGpNKb1J\n4NPaPH1YZZc+LOXgqVdakGrFXUOfy/Tu2NXf5zgSDpPOlLOtngc1Mah410mzMCRu\nM8B1Fmvg6TDc5rHIQDZ4TKCTd0vJGrmsOYYTB92QTAm5DaNPBHSp5wlpAoGBAI/o\n1cn58LUtxX7lu6LSZg+h0YmV9u6VogM7Qz0T/xlLXXiRjrhecTlFIQlemVWdCcQk\nvfmRcnJ7gtIcwMNo6LhZKxdonImZVO3oQ/gJ29e7Cgf8ly9D4M0xFbVxNNZpDGBg\n4yimHO1YSaNsewPTy0QMILSTznmA/whjAvuiT87FAoGAFXUFgf9DxNCz91IFL11l\n40wnwi7pFCwdb5PWbOJppsZPt5J6LeK/vKeqseVAOoqawBfabueYKTMgMjGVafiL\nZ1MAQthiR7PuSvBA7plEV/+1wpRuo/Q9s87w0oQd5g9XTXCnQNboBHTBx+IKdXMT\nz/HxVYpJ+bXjXEIGyP2Juo0=\n-----END PRIVATE KEY-----\n",
	  "client_email": "firebase-adminsdk-4i8gk@retro-collection-d1e64.iam.gserviceaccount.com",
	  "client_id": "107660023625238433210",
	  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
	  "token_uri": "https://oauth2.googleapis.com/token",
	  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
	  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4i8gk%40retro-collection-d1e64.iam.gserviceaccount.com"
	}
  ),
  databaseURL: "https://retro-collection-d1e64.firebaseio.com"
});*/
export default fire;
