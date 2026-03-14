const Footer = () => {
  return (
    <footer className="w-full backdrop-blur-md bg-white/40 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 text-black">

        {/* Logo */}
        <div>
          <h2 className="text-4xl font-bold mb-4">LOGO</h2>
          <div className="flex gap-4 text-xl">
            <span>🌐</span>
            <span>💬</span>
            <span>📘</span>
            <span>📷</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Наши услуги</h3>
          <ul className="space-y-2">
            <li>Цены</li>
            <li>Отслеживание</li>
            <li>Сообщить об ошибке</li>
            <li>Условия услуг</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Наша компания</h3>
          <ul className="space-y-2">
            <li>Отчетность</li>
            <li>Свяжитесь с нами</li>
            <li>Управление</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Адрес</h3>
          <ul className="space-y-2">
            <li>Узбекистан, Ташкент</li>
            <li>Улица, 24</li>
            <li>+9989484844848</li>
            <li>info@bmgsoft.com</li>
          </ul>
        </div>

      </div>
    </footer>
  )
}

export default Footer