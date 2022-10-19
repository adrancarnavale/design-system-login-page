import { Envelope, Lock } from 'phosphor-react';
import { Button } from '../../components/Button/Button';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { GeneralTextInput } from '../../components/GeneralTextInput/GeneralTextInput';
import { Heading } from '../../components/Heading/Heading';
import { Text } from '../../components/Text/Text';
import { ReactLogo } from '../../Logo/React';

export function Login() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <header className="flex flex-col items-center">
        <ReactLogo />

        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className="flex flex-col gap-4 items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3">
          <Text className="font-semibold">Endereço de e-mail</Text>

          <GeneralTextInput.Container>
            <GeneralTextInput.Icon>
              <Envelope />
            </GeneralTextInput.Icon>

            <GeneralTextInput.Input
              type="email"
              id="email"
              placeholder="Digite o seu e-mail"
            />
          </GeneralTextInput.Container>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3">
          <Text className="font-semibold">Senha</Text>

          <GeneralTextInput.Container>
            <GeneralTextInput.Icon>
              <Lock />
            </GeneralTextInput.Icon>

            <GeneralTextInput.Input
              type="password"
              id="password"
              placeholder="********"
            />
          </GeneralTextInput.Container>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          Entrar na plataforma
        </Button>
      </form>

      <footer className="flex flex-col items-center gap-4 mt-8">
        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Esqueceu sua senha?
          </a>
        </Text>

        <Text asChild size="sm">
          <a href="" className="text-gray-400 underline hover:text-gray-200">
            Não possui conta? Crie uma agora!
          </a>
        </Text>
      </footer>
    </div>
  );
}
