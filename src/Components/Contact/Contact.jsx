import React from "react";
import styles from "./Contact.module.scss";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export default function Contact() {
	return (
		<div className={styles["contact-background"]}>
			<div className={styles["contact-panel"]}>
				<h1 className={styles["contact-welcome"]}>
					Contact us!
				</h1><br></br><br></br>
				<p className={styles["contact-subtitle"]}>
					Any question sent will be answered as soon as possible through one of
					the following ways of contact. Press on one to contact us and let us
					try to fix all your problems! (Those related to the App though ;D)
				</p><br></br>
				<br />
				<button type="button" className={styles["contact-button"]}>
					<span className={styles["contact-button-text"]}>
						Twitter National React
					</span>
				</button>
				<div>
					<button type="button" className={styles["contact-button"]}>
						<span className={styles["contact-button-text"]}>
							Facebook National React
						</span>
					</button>
				</div>
				<button type="button" className={styles["contact-button"]}>
					<span className={styles["contact-button-text"]}>
						Instagram National React
					</span>
				</button>

				<br />
				<br />
				<br />
				<br />

				<span className={styles["contact-end-note"]}>
					We would kindly appreciate patience, thank you very much ;D
				</span>
			</div>
		</div>
	);
}
