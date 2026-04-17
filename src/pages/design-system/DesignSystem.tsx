import { AnimatedButton } from "@/components/animated-button/AnimatedButton";
import { Button } from "@/components/button/Button";
import { Badge } from "@/components/badge/Badge";
import { Card } from "@/components/card/Card";
import { Input } from "@/components/input/Input";
import { Textarea } from "@/components/input/Textarea";
import { Divider } from "@/components/divider/Divider";
import { Tag } from "@/components/tag/Tag";
import styles from "./DesignSystem.module.scss";
import { swatches } from "./DesignSystem.constants";

export const DesignSystem = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Tag>Design System</Tag>
        <h1>Kinetic Dark System</h1>
        <p>
          A high-energy, performance-oriented design language balancing vibrant
          chromatic accents against a deep neutral foundation.
        </p>
      </header>

      <Divider />

      {/* Colors */}
      <section className={styles.section}>
        <Tag>Palette</Tag>
        <h2>Colors</h2>
        <div className={styles.swatches}>
          {swatches.map((swatch) => (
            <div key={swatch.value} className={styles.swatch}>
              <div
                className={styles.swatchColor}
                style={{ backgroundColor: swatch.value }}
              />
              <p className={styles.swatchName}>{swatch.label}</p>
              <p className={styles.swatchValue}>{swatch.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Typography */}
      <section className={styles.section}>
        <Tag>Type</Tag>
        <h2>Typography</h2>
        <div className={styles.typeSection}>
          <div>
            <p className={styles.typeLabel}>Space Grotesk — Headings</p>
            <h1>The Controlled Inferno</h1>
            <h3>Live Pyrotechnic Mastery</h3>
            <h5>Visual Echoes of Heat</h5>
          </div>
          <Divider />
          <div>
            <p className={styles.typeLabel}>Manrope — Body &amp; Labels</p>
            <p style={{ fontSize: "1.125rem", maxWidth: "600px" }}>
              Cinematic fire performance art for high-end events, cinematic
              productions, and immersive festivals. We bring controlled chaos to
              life.
            </p>
            <p
              style={{
                fontSize: "0.875rem",
                maxWidth: "600px",
                marginTop: "1rem",
              }}
            >
              All shows are fully insured and comply with local pyrotechnic
              regulations. Our crew has 10+ years of professional experience.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Buttons */}
      <section className={styles.section}>
        <Tag>Actions</Tag>
        <h2>Buttons</h2>
        <div className={styles.buttonRow}>
          <Button variant="primary" size="lg">
            Book a Show
          </Button>
          <Button variant="primary">Book Now</Button>
          <Button variant="primary" size="sm">
            Enquire
          </Button>
        </div>
        <div className={styles.buttonRow}>
          <Button variant="secondary" size="lg">
            View Gallery
          </Button>
          <Button variant="secondary">Learn More</Button>
          <Button variant="ghost">Contact Us</Button>
          <Button variant="danger">Cancel Booking</Button>
        </div>
      </section>

      <Divider />

      {/* Animated Button */}
      <section className={styles.section}>
        <Tag>Effects</Tag>
        <h2>Animated Button</h2>
        <div className={styles.buttonRow}>
          <AnimatedButton size="lg">Book a Show</AnimatedButton>
          <AnimatedButton>Contact Us</AnimatedButton>
          <AnimatedButton size="sm">Enquire</AnimatedButton>
        </div>
      </section>

      <Divider />

      {/* Badges */}
      <section className={styles.section}>
        <Tag>Labels</Tag>
        <h2>Badges</h2>
        <div className={styles.badgeRow}>
          <Badge variant="accent">Live Performance</Badge>
          <Badge variant="secondary">from $800</Badge>
          <Badge variant="danger">Sold Out</Badge>
          <Badge variant="neutral">Festival Grade</Badge>
        </div>
      </section>

      <Divider />

      {/* Cards */}
      <section className={styles.section}>
        <Tag>Surfaces</Tag>
        <h2>Cards</h2>
        <div className={styles.cards}>
          <Card>
            <Badge variant="accent">15 min · High Intensity</Badge>
            <h4>Solo</h4>
            <p>
              Single performer, full fire manipulation set designed for intimate
              venues and corporate events.
            </p>
            <p className={styles.price}>from $800</p>
          </Card>
          <Card variant="accent">
            <Badge variant="accent">Synchronized Ritual</Badge>
            <h4>Duo Inferno</h4>
            <p>
              Two performers in choreographed synchrony, creating dramatic
              visual narratives with fire.
            </p>
            <p className={styles.price}>from $1,500</p>
          </Card>
          <Card variant="surface">
            <Badge variant="secondary">Festival Grade</Badge>
            <h4>Grand Finale</h4>
            <p>
              Full pyrotechnic ensemble with multiple performers and stage-grade
              effects.
            </p>
            <p className={styles.price}>from $4,000</p>
          </Card>
        </div>
      </section>

      <Divider />

      {/* Form */}
      <section className={styles.section}>
        <Tag>Forms</Tag>
        <h2>Inputs</h2>
        <div className={styles.form}>
          <Input
            label="Full Name"
            id="ds-name"
            type="text"
            placeholder="Alex Ember"
          />
          <Input
            label="Email Address"
            id="ds-email"
            type="email"
            placeholder="you@example.com"
          />
          <Textarea
            label="Event Details"
            id="ds-message"
            placeholder="Tell us about your event…"
          />
          <Button variant="primary">Send Enquiry</Button>
        </div>
      </section>
    </div>
  );
};
