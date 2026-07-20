import { Formik } from "formik";
import * as Yup from "yup";

// Task 3: Yup schema — valid email, password >= 6 chars.
const schema = Yup.object({
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  password: Yup.string().min(6, "At least 6 characters").required("Password is required"),
});

// Tasks 2 & 3: Formik manages form state via values/handleChange, with Yup validation.
export default function LoginFormik() {
  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>2 & 3 · Login with Formik + Yup</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(values) => alert("Submitted:\n" + JSON.stringify(values, null, 2))}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input
              style={styles.input}
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && <span style={styles.err}>{errors.email}</span>}

            <input
              style={styles.input}
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && <span style={styles.err}>{errors.password}</span>}

            <button type="submit" style={styles.btn}>Log in</button>
          </form>
        )}
      </Formik>
    </div>
  );
}
const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem" },
  h2: { marginTop: 0, fontSize: "1.05rem" },
  form: { display: "grid", gap: "0.5rem" },
  input: { padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc" },
  btn: { border: "none", background: "#1db954", color: "#fff", borderRadius: 8, padding: "0.55rem", fontWeight: 700, cursor: "pointer", marginTop: "0.25rem" },
  err: { color: "#c0392b", fontSize: "0.8rem" },
};
