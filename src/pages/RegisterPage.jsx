import { RegisterForm } from '../components/RegisterForm/RegisterForm';
import DocumentTitle from '../components/DocumentTitle';

export default function RegisterPage() {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <RegisterForm />
    </div>
  );
}
