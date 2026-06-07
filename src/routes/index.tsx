import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BarberBoss — Sua Barbearia no Piloto Automático" },
      {
        name: "description",
        content:
          "Sistema completo para gestão de barbearias. Agendamento automático, controle de caixa e comissões. 30 dias grátis, sem cartão de crédito.",
      },
      { property: "og:title", content: "BarberBoss — Sua Barbearia no Piloto Automático" },
      {
        property: "og:description",
        content:
          "Elimine o caos do WhatsApp. Agende clientes, controle caixa e comissões em tempo real.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});
