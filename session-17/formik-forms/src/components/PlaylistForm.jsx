import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const GENRES = ["Pop", "Rock", "Hip-Hop", "Jazz", "Classical"];

// Task 4: Yup schema — name & genre required, description optional.
const schema = Yup.object({
  name: Yup.string().required("Playlist name is required"),
  description: Yup.string(), // optional
  genre: Yup.string().required("Please select a genre"),
});

// Task 4: playlist form using <Formik>/<Form>/<Field>/<ErrorMessage>.
// Errors only appear after a field is touched — Formik + <ErrorMessage>
// handles the "touched" logic automatically.
export default function PlaylistForm() {
  return (
    <div style={styles.card}>
      <h2 style={styles.h2}>4 · Playlist form (Formik + Yup)</h2>
      <Formik
        initialValues={{ name: "", description: "", genre: "" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          alert("Playlist created:\n" + JSON.stringify(values, null, 2));
          resetForm();
        }}
      >
        <Form style={styles.form}>
          <label style={styles.label}>Playlist name *</label>
          <Field name="name" placeholder="My Playlist" style={styles.input} />
          <ErrorMessage name="name" component="span" style={styles.err} />

          <label style={styles.label}>Description (optional)</label>
          <Field name="description" as="textarea" rows={2} placeholder="Describe it…" style={styles.input} />

          <label style={styles.label}>Genre *</label>
          <Field name="genre" as="select" style={styles.input}>
            <option value="">Select a genre…</option>
            {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
          </Field>
          <ErrorMessage name="genre" component="span" style={styles.err} />

          <button type="submit" style={styles.btn}>Create playlist</button>
        </Form>
      </Formik>
    </div>
  );
}
const styles = {
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "1.25rem" },
  h2: { marginTop: 0, fontSize: "1.05rem" },
  form: { display: "grid", gap: "0.35rem" },
  label: { fontSize: "0.85rem", fontWeight: 600, marginTop: "0.4rem" },
  input: { padding: "0.55rem 0.7rem", borderRadius: 8, border: "1px solid #ccc", fontFamily: "inherit" },
  btn: { border: "none", background: "#7c3aed", color: "#fff", borderRadius: 8, padding: "0.55rem", fontWeight: 700, cursor: "pointer", marginTop: "0.5rem" },
  err: { color: "#c0392b", fontSize: "0.8rem" },
};
