export default function DisclaimerPage() {
  return (
    <div className="container-custom py-8">
      <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
        <h1>Medical Disclaimer</h1>
        <p className="text-gray-600 dark:text-gray-400">Last updated: January 15, 2024</p>

        <section>
          <h2>Important Notice</h2>
          <p>
            The information and calculators on SleepWise are provided for informational and 
            educational purposes only. They are not a substitute for professional medical 
            advice, diagnosis, or treatment.
          </p>
        </section>

        <section>
          <h2>No Medical Advice</h2>
          <p>
            SleepWise does not provide medical advice. Our sleep calculators and educational 
            content are designed to help you understand sleep patterns and general wellness, 
            but they cannot diagnose or treat any medical condition.
          </p>
        </section>

        <section>
          <h2>Consult a Professional</h2>
          <p>
            If you have persistent sleep problems, experience symptoms of sleep disorders, 
            or have any concerns about your health, please consult a qualified healthcare 
            professional. This includes:
          </p>
          <ul>
            <li>Chronic insomnia</li>
            <li>Loud snoring or interrupted breathing during sleep</li>
            <li>Daytime sleepiness affecting daily activities</li>
            <li>Unusual sleep behaviors</li>
            <li>Sleep problems affecting children or elderly</li>
          </ul>
        </section>

        <section>
          <h2>Calculator Limitations</h2>
          <p>
            Our sleep calculators provide estimates based on average sleep patterns and 
            general guidelines. Individual sleep needs vary based on genetics, lifestyle, 
            health conditions, and other factors. Always listen to your body's natural 
            rhythms and consult healthcare providers for personalized advice.
          </p>
        </section>

        <section>
          <h2>Emergency Situations</h2>
          <p>
            If you are experiencing a medical emergency, call emergency services immediately. 
            Do not use SleepWise for emergency medical situations.
          </p>
        </section>

        <section>
          <h2>No Guarantees</h2>
          <p>
            We do not guarantee any specific outcomes from using our website or calculators. 
            Results may vary, and the information provided should be considered general 
            guidance rather than medical prescriptions.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            If you have questions about this disclaimer or our services, please contact:
            <br />
            <a href="mailto:info@sleepwise.com" className="text-primary-600 dark:text-primary-400">
              info@sleepwise.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
