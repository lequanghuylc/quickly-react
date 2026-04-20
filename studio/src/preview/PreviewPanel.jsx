import React, { useState, useMemo } from 'react';
import { generateAllFiles } from '../codegen/generator';

const SHADOW_CSS = {
  none:   'none',
  subtle: '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.05)',
  medium: '0 4px 6px -1px rgba(0,0,0,0.10), 0 2px 4px -1px rgba(0,0,0,0.06)',
  strong: '0 10px 25px -5px rgba(0,0,0,0.18), 0 4px 6px -2px rgba(0,0,0,0.09)',
};

function useDS(preferences) {
  return useMemo(() => {
    const { colors, typography: { fontFamily }, borders: { radius }, spacing: { unit }, shadows: { style } } = preferences;
    const shadow = SHADOW_CSS[style];
    const cardRadius = Math.round(radius * 1.5);

    return {
      colors, fontFamily, radius, unit, shadow, cardRadius,
      btn: (variant) => {
        const base = {
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          gap: 6, borderRadius: radius, border: 'none', cursor: 'pointer',
          fontFamily: `'${fontFamily}', sans-serif`, fontWeight: 600, fontSize: 14,
          paddingInline: unit * 2.5, paddingBlock: unit * 1.25,
          lineHeight: 1,
        };
        const variants = {
          primary:     { ...base, backgroundColor: colors.primary,    color: colors.textInverse, boxShadow: style !== 'none' ? shadow : 'none' },
          secondary:   { ...base, backgroundColor: colors.bgAccent,   color: colors.primary, border: `1.5px solid ${colors.primary}` },
          ghost:       { ...base, backgroundColor: 'transparent',     color: colors.textPrimary, border: `1.5px solid ${colors.border}` },
          destructive: { ...base, backgroundColor: colors.error,      color: '#fff' },
          disabled:    { ...base, backgroundColor: colors.neutral200, color: colors.neutral400, cursor: 'not-allowed' },
          sm:          { ...base, paddingInline: unit * 1.75, paddingBlock: unit * 0.875, fontSize: 12, backgroundColor: colors.primary, color: colors.textInverse },
          lg:          { ...base, paddingInline: unit * 3.5,  paddingBlock: unit * 1.625, fontSize: 16, backgroundColor: colors.primary, color: colors.textInverse },
        };
        return variants[variant] ?? variants.primary;
      },
      input: (state = 'default') => ({
        width: '100%', display: 'block',
        paddingInline: unit * 1.5, paddingBlock: unit * 1.25,
        backgroundColor: colors.bgPrimary, color: colors.textPrimary,
        borderRadius: radius, fontSize: 14,
        fontFamily: `'${fontFamily}', sans-serif`,
        outline: 'none',
        border: state === 'focused' ? `1.5px solid ${colors.primary}`
              : state === 'error'   ? `1.5px solid ${colors.error}`
              : `1.5px solid ${colors.border}`,
        boxShadow: state === 'focused' ? `0 0 0 3px ${colors.bgAccent}`
                 : state === 'error'   ? '0 0 0 3px rgba(239,68,68,0.12)'
                 : 'none',
      }),
      card: (elevated = false) => ({
        backgroundColor: colors.bgPrimary,
        borderRadius: cardRadius,
        border: `1px solid ${colors.border}`,
        padding: unit * 3,
        boxShadow: elevated ? SHADOW_CSS['strong'] : shadow,
      }),
      badge: (variant) => {
        const config = {
          success: { bg: 'rgba(16,185,129,0.12)',  text: '#059669' },
          error:   { bg: 'rgba(239,68,68,0.12)',   text: '#DC2626' },
          warning: { bg: 'rgba(245,158,11,0.12)',  text: '#D97706' },
          info:    { bg: 'rgba(59,130,246,0.12)',  text: '#2563EB' },
          neutral: { bg: colors.neutral100,         text: colors.neutral600 },
          primary: { bg: colors.bgAccent,           text: colors.primaryDark },
        }[variant] ?? { bg: colors.neutral100, text: colors.neutral600 };
        return {
          display: 'inline-flex', alignItems: 'center', gap: 4,
          paddingInline: unit, paddingBlock: unit * 0.5,
          backgroundColor: config.bg, color: config.text,
          borderRadius: radius === 0 ? 0 : 9999,
          fontFamily: `'${fontFamily}', sans-serif`, fontSize: 12, fontWeight: 600,
          lineHeight: 1,
        };
      },
    };
  }, [preferences]);
}

/* ─── Sub-components ─── */

function Section({ title, children }) {
  return (
    <div className="preview-section">
      <div className="preview-section-title">{title}</div>
      {children}
    </div>
  );
}

/* ─── Components tab ─────────────────────────────────────────── */

function ComponentsTab({ ds, preferences }) {
  const { colors, fontFamily, unit, shadow, cardRadius } = ds;
  const font = (w = 400, s = 14) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });

  return (
    <div>
      <Section title="Buttons">
        <div className="preview-row" style={{ marginBottom: 10 }}>
          <button style={ds.btn('primary')}>Primary</button>
          <button style={ds.btn('secondary')}>Secondary</button>
          <button style={ds.btn('ghost')}>Ghost</button>
          <button style={ds.btn('destructive')}>Destructive</button>
          <button style={ds.btn('disabled')} disabled>Disabled</button>
        </div>
        <div className="preview-row">
          <button style={ds.btn('sm')}>Small</button>
          <button style={ds.btn('primary')}>Medium</button>
          <button style={ds.btn('lg')}>Large</button>
        </div>
      </Section>

      <Section title="Inputs">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 480 }}>
          <div>
            <div style={{ ...font(500, 13), color: colors.textSecondary, marginBottom: 6 }}>Default</div>
            <input readOnly placeholder="you@example.com" style={ds.input('default')} />
          </div>
          <div>
            <div style={{ ...font(500, 13), color: colors.textSecondary, marginBottom: 6 }}>Focused state</div>
            <input readOnly defaultValue="user@example.com" style={ds.input('focused')} />
          </div>
          <div>
            <div style={{ ...font(500, 13), color: colors.error, marginBottom: 6 }}>Error state</div>
            <input readOnly defaultValue="invalid-email" style={ds.input('error')} />
            <div style={{ ...font(400, 12), color: colors.error, marginTop: 5 }}>Please enter a valid email address.</div>
          </div>
          <div>
            <div style={{ ...font(500, 13), color: colors.textSecondary, marginBottom: 6 }}>Search combo</div>
            <div style={{ display: 'flex', border: `1.5px solid ${colors.border}`, borderRadius: ds.radius, overflow: 'hidden', backgroundColor: colors.bgPrimary }}>
              <input readOnly placeholder="Search…" style={{ ...ds.input(), border: 'none', boxShadow: 'none', flex: 1 }} />
              <button style={{ ...ds.btn('primary'), borderRadius: 0, paddingInline: unit * 2 }}>Search</button>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Cards">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          <div style={ds.card()}>
            <div style={{ ...font(600, 16), color: colors.textPrimary, marginBottom: 6 }}>Simple Card</div>
            <div style={{ ...font(400, 14), color: colors.textSecondary, lineHeight: 1.6, marginBottom: 16 }}>
              A clean card component with consistent padding and border styling.
            </div>
            <button style={ds.btn('primary')}>Action</button>
          </div>
          <div style={ds.card()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ ...font(500, 13), color: colors.textSecondary }}>Monthly Revenue</div>
              <span style={ds.badge('success')}>↑ 12%</span>
            </div>
            <div style={{ ...font(700, 28), color: colors.textPrimary, marginBottom: 4 }}>$48,295</div>
            <div style={{ ...font(400, 13), color: colors.textTertiary }}>Compared to last month</div>
          </div>
          <div style={ds.card(true)}>
            <div style={{ width: 40, height: 40, borderRadius: ds.radius, backgroundColor: colors.bgAccent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, marginBottom: 12 }}>⚡</div>
            <div style={{ ...font(600, 15), color: colors.textPrimary, marginBottom: 6 }}>Elevated Card</div>
            <div style={{ ...font(400, 13), color: colors.textSecondary, lineHeight: 1.6 }}>Uses stronger shadow to indicate higher elevation in the visual hierarchy.</div>
          </div>
        </div>
      </Section>

      <Section title="Badges & Status">
        <div className="preview-row" style={{ flexWrap: 'wrap', marginBottom: 10 }}>
          {['success', 'error', 'warning', 'info', 'neutral', 'primary'].map(v => (
            <span key={v} style={ds.badge(v)}>{v.charAt(0).toUpperCase() + v.slice(1)}</span>
          ))}
        </div>
        <div className="preview-row">
          <span style={{ ...ds.badge('success'), fontSize: 11 }}>● Active</span>
          <span style={{ ...ds.badge('error'),   fontSize: 11 }}>● Offline</span>
          <span style={{ ...ds.badge('warning'), fontSize: 11 }}>● Pending</span>
          <span style={{ ...ds.badge('neutral'), fontSize: 11 }}>● Draft</span>
          <span style={{ ...ds.badge('primary'), fontSize: 11 }}>★ Featured</span>
        </div>
      </Section>

      <Section title="Dropdown / Select">
        <div style={{ maxWidth: 280 }}>
          <div style={{ ...font(500, 13), color: colors.textSecondary, marginBottom: 6 }}>Category</div>
          <div style={{ ...ds.input(), display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
            <span style={{ color: colors.textPrimary }}>Select an option…</span>
            <span style={{ color: colors.textTertiary, fontSize: 12 }}>▾</span>
          </div>
          <div style={{ marginTop: 4, backgroundColor: colors.bgPrimary, borderRadius: ds.radius, border: `1.5px solid ${colors.primary}`, boxShadow: SHADOW_CSS.medium, overflow: 'hidden' }}>
            {['Design System', 'Components', 'Tokens', 'Documentation'].map((item, i) => (
              <div key={item} style={{ padding: `${unit}px ${unit * 1.5}px`, fontSize: 14, fontFamily: `'${fontFamily}', sans-serif`, color: i === 0 ? colors.primary : colors.textPrimary, backgroundColor: i === 0 ? colors.bgAccent : 'transparent', fontWeight: i === 0 ? 600 : 400, borderBottom: i < 3 ? `1px solid ${colors.border}` : 'none', cursor: 'pointer' }}>
                {i === 0 && <span style={{ marginRight: 8 }}>✓</span>}{item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Section / Container">
        <div style={{ backgroundColor: colors.bgSecondary, borderRadius: cardRadius, padding: unit * 4, border: `1px solid ${colors.border}` }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: unit * 3 }}>
            <div>
              <div style={{ ...font(700, 20), color: colors.textPrimary, marginBottom: 4 }}>Section Title</div>
              <div style={{ ...font(400, 13), color: colors.textSecondary }}>Section description or subtitle here.</div>
            </div>
            <button style={ds.btn('secondary')}>View all</button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: unit * 2 }}>
            {['Item One', 'Item Two', 'Item Three'].map(label => (
              <div key={label} style={{ ...ds.card(), padding: unit * 2 }}>
                <div style={{ ...font(600, 13), color: colors.textPrimary }}>{label}</div>
                <div style={{ ...font(400, 12), color: colors.textTertiary, marginTop: 4 }}>Sub-item content</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <IconButtonsSection ds={ds} />
      <TextareaSection ds={ds} />
      <FormControlsSection ds={ds} />
      <SearchBarSection ds={ds} />
      <ToastSection ds={ds} />
      <AccordionSection ds={ds} />
    </div>
  );
}

/* ─── New component preview sections ─────────────────────────── */

function IconButtonsSection({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const iconBtn = (variant = 'primary', size = 36) => {
    const base = { width: size, height: size, borderRadius: radius, border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: Math.round(size * 0.44) };
    if (variant === 'primary')   return { ...base, backgroundColor: colors.primary, color: '#fff' };
    if (variant === 'secondary') return { ...base, backgroundColor: colors.bgAccent, color: colors.primary, border: `1.5px solid ${colors.primary}` };
    if (variant === 'ghost')     return { ...base, backgroundColor: 'transparent', color: colors.textPrimary, border: `1.5px solid ${colors.border}` };
    if (variant === 'danger')    return { ...base, backgroundColor: 'rgba(239,68,68,0.1)', color: colors.error };
    return base;
  };
  return (
    <Section title="Icon Button">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div>
          <div style={{ ...font(500, 12), color: colors.textTertiary, marginBottom: 8 }}>Variants</div>
          <div className="preview-row">
            {['primary', 'secondary', 'ghost', 'danger'].map(v => (
              <button key={v} style={iconBtn(v)} title={v}>★</button>
            ))}
          </div>
        </div>
        <div>
          <div style={{ ...font(500, 12), color: colors.textTertiary, marginBottom: 8 }}>Sizes (sm / md / lg)</div>
          <div className="preview-row" style={{ alignItems: 'center' }}>
            <button style={iconBtn('primary', 28)}>✎</button>
            <button style={iconBtn('primary', 36)}>✎</button>
            <button style={iconBtn('primary', 44)}>✎</button>
          </div>
        </div>
        <div>
          <div style={{ ...font(500, 12), color: colors.textTertiary, marginBottom: 8 }}>Round variant</div>
          <div className="preview-row">
            {['primary', 'secondary', 'ghost'].map(v => (
              <button key={v} style={{ ...iconBtn(v), borderRadius: 9999 }}>+</button>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TextareaSection({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const taBase = { width: '100%', borderRadius: radius, fontSize: 14, fontFamily: `'${fontFamily}', sans-serif`, padding: `${unit * 1.25}px ${unit * 1.5}px`, resize: 'vertical', minHeight: 80, outline: 'none', backgroundColor: colors.bgPrimary, color: colors.textPrimary };
  return (
    <Section title="Textarea">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 480 }}>
        <div>
          <div style={{ ...font(500, 13), color: colors.textSecondary, marginBottom: 6 }}>Default</div>
          <textarea readOnly placeholder="Write a message…" style={{ ...taBase, border: `1.5px solid ${colors.border}` }} />
        </div>
        <div>
          <div style={{ ...font(500, 13), color: colors.textSecondary, marginBottom: 6 }}>Focused</div>
          <textarea readOnly defaultValue="I'm focused and ready for input." style={{ ...taBase, border: `1.5px solid ${colors.primary}`, boxShadow: `0 0 0 3px ${colors.bgAccent}` }} />
        </div>
        <div>
          <div style={{ ...font(500, 13), color: colors.error, marginBottom: 6 }}>Error</div>
          <textarea readOnly defaultValue="This field has an error." style={{ ...taBase, border: `1.5px solid ${colors.error}`, boxShadow: '0 0 0 3px rgba(239,68,68,0.12)' }} />
        </div>
      </div>
    </Section>
  );
}

function FormControlsSection({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [checked, setChecked] = useState({ a: true, b: false, c: true });
  const [radio, setRadio] = useState('b');
  const [sw, setSw] = useState({ x: true, y: false, z: true });

  const checkBox = (key) => (
    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => setChecked(p => ({ ...p, [key]: !p[key] }))}>
      <div style={{ width: 18, height: 18, borderRadius: Math.min(radius, 4), border: `2px solid ${checked[key] ? colors.primary : colors.border}`, backgroundColor: checked[key] ? colors.primary : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'all 0.15s' }}>
        {checked[key] && <span style={{ color: '#fff', fontSize: 11, fontWeight: 700, lineHeight: 1 }}>✓</span>}
      </div>
      <span style={{ ...font(400, 14), color: colors.textPrimary }}>Option {key.toUpperCase()}</span>
    </div>
  );

  const radioBtn = (key, label) => (
    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => setRadio(key)}>
      <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${radio === key ? colors.primary : colors.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {radio === key && <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: colors.primary }} />}
      </div>
      <span style={{ ...font(400, 14), color: colors.textPrimary }}>{label}</span>
    </div>
  );

  const switchEl = (key, label) => (
    <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }} onClick={() => setSw(p => ({ ...p, [key]: !p[key] }))}>
      <div style={{ width: 44, height: 24, borderRadius: 12, backgroundColor: sw[key] ? colors.primary : colors.neutral300, position: 'relative', transition: 'background 0.2s', flexShrink: 0 }}>
        <div style={{ position: 'absolute', top: 3, left: sw[key] ? 23 : 3, width: 18, height: 18, borderRadius: '50%', backgroundColor: '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.15)', transition: 'left 0.2s' }} />
      </div>
      <span style={{ ...font(400, 14), color: colors.textPrimary }}>{label}</span>
    </div>
  );

  return (
    <Section title="Form Controls (Checkbox · Radio · Switch)">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 24 }}>
        <div>
          <div style={{ ...font(600, 13), color: colors.textSecondary, marginBottom: 12 }}>Checkbox</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {['a', 'b', 'c'].map(k => checkBox(k))}
          </div>
        </div>
        <div>
          <div style={{ ...font(600, 13), color: colors.textSecondary, marginBottom: 12 }}>Radio</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[['a', 'Option A'], ['b', 'Option B'], ['c', 'Option C']].map(([k, l]) => radioBtn(k, l))}
          </div>
        </div>
        <div>
          <div style={{ ...font(600, 13), color: colors.textSecondary, marginBottom: 12 }}>Switch</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[['x', 'Notifications'], ['y', 'Dark mode'], ['z', 'Auto-save']].map(([k, l]) => switchEl(k, l))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <div style={{ ...font(600, 13), color: colors.textSecondary, marginBottom: 12 }}>Form Field (Label + Input + Helper)</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 480 }}>
          <div>
            <label style={{ ...font(500, 13), color: colors.textPrimary, display: 'block', marginBottom: 6 }}>Email address <span style={{ color: colors.error }}>*</span></label>
            <input readOnly placeholder="you@example.com" style={ds.input('default')} />
            <div style={{ ...font(400, 12), color: colors.textTertiary, marginTop: 5 }}>We'll never share your email with anyone.</div>
          </div>
          <div>
            <label style={{ ...font(500, 13), color: colors.error, display: 'block', marginBottom: 6 }}>Username</label>
            <input readOnly defaultValue="user 123" style={ds.input('error')} />
            <div style={{ ...font(400, 12), color: colors.error, marginTop: 5 }}>Username can only contain letters, numbers, and underscores.</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SearchBarSection({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [query, setQuery] = useState('');
  const items = ['Dashboard', 'Analytics', 'Components', 'Documentation', 'Settings', 'Team', 'Billing'];
  const filtered = query ? items.filter(i => i.toLowerCase().includes(query.toLowerCase())) : [];

  return (
    <Section title="Search Bar">
      <div style={{ maxWidth: 360, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, paddingInline: unit * 1.5, paddingBlock: unit * 1.125, backgroundColor: colors.bgPrimary, borderRadius: radius, border: `1.5px solid ${query ? colors.primary : colors.border}`, boxShadow: query ? `0 0 0 3px ${colors.bgAccent}` : 'none' }}>
          <span style={{ color: colors.textTertiary, fontSize: 14 }}>🔍</span>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search…"
            style={{ flex: 1, border: 'none', outline: 'none', backgroundColor: 'transparent', fontSize: 14, fontFamily: `'${fontFamily}', sans-serif`, color: colors.textPrimary }}
          />
          {query && <span onClick={() => setQuery('')} style={{ color: colors.textTertiary, cursor: 'pointer', fontSize: 16, lineHeight: 1 }}>×</span>}
        </div>
        {filtered.length > 0 && (
          <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 4, backgroundColor: colors.bgPrimary, borderRadius: radius, border: `1.5px solid ${colors.border}`, boxShadow: SHADOW_CSS.medium, overflow: 'hidden', zIndex: 10 }}>
            {filtered.map((item, i) => (
              <div key={item} onClick={() => setQuery(item)} style={{ padding: `${unit}px ${unit * 1.5}px`, fontSize: 14, fontFamily: `'${fontFamily}', sans-serif`, color: colors.textPrimary, cursor: 'pointer', borderBottom: i < filtered.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
                <span style={{ color: colors.textTertiary, marginRight: 8 }}>🔍</span>{item}
              </div>
            ))}
          </div>
        )}
        {query && filtered.length === 0 && (
          <div style={{ marginTop: 8, ...font(400, 13), color: colors.textTertiary }}>No results for "{query}"</div>
        )}
        {!query && <div style={{ marginTop: 8, ...font(400, 12), color: colors.textTertiary }}>Type to search — try "dash" or "comp"</div>}
      </div>
    </Section>
  );
}

function ToastSection({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [dismissed, setDismissed] = useState({});

  const toasts = [
    { id: 'success', type: 'success', icon: '✓', title: 'Saved successfully', body: 'Your changes have been saved.', bg: 'rgba(16,185,129,0.10)', border: '#10B981', titleColor: '#065F46' },
    { id: 'error',   type: 'error',   icon: '✕', title: 'Something went wrong', body: 'Please try again or contact support.', bg: 'rgba(239,68,68,0.10)', border: '#EF4444', titleColor: '#991B1B' },
    { id: 'warning', type: 'warning', icon: '⚠', title: 'Heads up', body: 'This action cannot be undone.', bg: 'rgba(245,158,11,0.10)', border: '#F59E0B', titleColor: '#92400E' },
    { id: 'info',    type: 'info',    icon: 'ℹ', title: 'New feature available', body: 'Check out what\'s new in v2.0.', bg: 'rgba(59,130,246,0.10)', border: '#3B82F6', titleColor: '#1E40AF' },
  ];

  return (
    <Section title="Toast / Info Box">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 440 }}>
        {toasts.map(t => dismissed[t.id] ? (
          <div key={t.id} onClick={() => setDismissed(p => ({ ...p, [t.id]: false }))} style={{ ...font(400, 12), color: colors.textTertiary, cursor: 'pointer', padding: '4px 8px' }}>↩ Show {t.type} toast</div>
        ) : (
          <div key={t.id} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, padding: `${unit * 1.25}px ${unit * 1.5}px`, borderRadius: radius, backgroundColor: t.bg, border: `1px solid ${t.border}30`, borderLeft: `3px solid ${t.border}` }}>
            <span style={{ fontSize: 15, marginTop: 1, color: t.border }}>{t.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ ...font(600, 13), color: t.titleColor, marginBottom: 2 }}>{t.title}</div>
              <div style={{ ...font(400, 12), color: colors.textSecondary }}>{t.body}</div>
            </div>
            <span onClick={() => setDismissed(p => ({ ...p, [t.id]: true }))} style={{ color: colors.textTertiary, cursor: 'pointer', fontSize: 16, lineHeight: 1, marginTop: 2 }}>×</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

function AccordionSection({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [open, setOpen] = useState(0);
  const items = [
    { q: 'What is a design system?',       a: 'A design system is a collection of reusable components, guided by clear standards, that can be assembled together to build any number of applications.' },
    { q: 'How do I customize the tokens?', a: 'Edit tokens.ts to change colors, spacing, radius, and typography. All components reference these tokens so changes propagate instantly.' },
    { q: 'Does it support dark mode?',     a: 'Yes — the token system supports dark variants. Pass a dark color set to createBase() and components will adapt automatically.' },
  ];

  return (
    <Section title="Accordion">
      <div style={{ maxWidth: 480, border: `1px solid ${colors.border}`, borderRadius: radius, overflow: 'hidden' }}>
        {items.map((item, i) => (
          <div key={i} style={{ borderBottom: i < items.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
            <div onClick={() => setOpen(open === i ? -1 : i)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: `${unit * 1.5}px ${unit * 2}px`, cursor: 'pointer', backgroundColor: open === i ? colors.bgSecondary : colors.bgPrimary }}>
              <span style={{ ...font(600, 14), color: colors.textPrimary }}>{item.q}</span>
              <span style={{ color: colors.textTertiary, fontSize: 16, transition: 'transform 0.2s', transform: open === i ? 'rotate(180deg)' : 'none' }}>▾</span>
            </div>
            {open === i && (
              <div style={{ padding: `${unit}px ${unit * 2}px ${unit * 1.5}px`, ...font(400, 14), color: colors.textSecondary, lineHeight: 1.7, backgroundColor: colors.bgPrimary }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ─── Layout tab ─────────────────────────────────────────────── */

function LeftSidebarDemo({ ds }) {
  const { colors, fontFamily, radius, unit } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [active, setActive] = useState(0);
  const nav = [{ icon: '⊞', label: 'Dashboard' }, { icon: '📈', label: 'Analytics' }, { icon: '📁', label: 'Projects' }, { icon: '👥', label: 'Team' }, { icon: '⚙️', label: 'Settings' }];

  return (
    <div style={{ display: 'flex', height: 220, borderRadius: radius, border: `1px solid ${colors.border}`, overflow: 'hidden', boxShadow: ds.shadow }}>
      {/* Sidebar */}
      <div style={{ width: 150, backgroundColor: colors.neutral900, padding: `${unit * 1.5}px ${unit}px`, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{ padding: `${unit * 0.75}px ${unit}px`, marginBottom: unit, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 24, height: 24, borderRadius: 6, backgroundColor: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>⚡</div>
          <span style={{ ...font(700, 13), color: '#fff' }}>MyApp</span>
        </div>
        {nav.map((item, i) => (
          <div key={item.label} onClick={() => setActive(i)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: `${unit * 0.75}px ${unit}px`, borderRadius: radius, backgroundColor: i === active ? colors.primary : 'transparent', color: i === active ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', ...font(i === active ? 600 : 400, 12) }}>
            <span style={{ fontSize: 13 }}>{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      {/* Main */}
      <div style={{ flex: 1, backgroundColor: colors.bgSecondary, padding: unit * 2, display: 'flex', flexDirection: 'column', gap: unit * 1.5 }}>
        <div style={{ ...font(700, 15), color: colors.textPrimary }}>{nav[active].label}</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: unit }}>
          {[['24', 'Projects'], ['8.4k', 'Members']].map(([v, l]) => (
            <div key={l} style={{ backgroundColor: colors.bgPrimary, borderRadius: radius, padding: `${unit}px ${unit * 1.5}px`, border: `1px solid ${colors.border}` }}>
              <div style={{ ...font(700, 18), color: colors.textPrimary }}>{v}</div>
              <div style={{ ...font(400, 11), color: colors.textTertiary }}>{l}</div>
            </div>
          ))}
        </div>
        {[70, 50, 85].map((w, i) => (
          <div key={i} style={{ height: 8, width: `${w}%`, backgroundColor: colors.neutral200, borderRadius: 4 }} />
        ))}
      </div>
    </div>
  );
}

function RightSidebarDemo({ ds }) {
  const { colors, fontFamily, radius, unit } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [selected, setSelected] = useState(1);

  return (
    <div style={{ display: 'flex', height: 220, borderRadius: radius, border: `1px solid ${colors.border}`, overflow: 'hidden', boxShadow: ds.shadow }}>
      {/* Main content */}
      <div style={{ flex: 1, backgroundColor: colors.bgPrimary, padding: unit * 2, display: 'flex', flexDirection: 'column', gap: unit * 1.25 }}>
        <div style={{ ...font(700, 15), color: colors.textPrimary }}>Inbox</div>
        {['Project update from Alex', 'New comment on #design', 'Weekly report ready', 'Server alert resolved'].map((msg, i) => (
          <div key={i} onClick={() => setSelected(i)} style={{ display: 'flex', alignItems: 'center', gap: unit, padding: `${unit * 0.75}px ${unit}px`, borderRadius: radius, backgroundColor: i === selected ? colors.bgAccent : 'transparent', cursor: 'pointer', border: i === selected ? `1px solid ${colors.primary}30` : '1px solid transparent' }}>
            <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: [colors.primary, colors.success, colors.warning, colors.neutral300][i], flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, color: '#fff', fontWeight: 700 }}>
              {['A', 'D', 'R', 'S'][i]}
            </div>
            <span style={{ ...font(i === selected ? 600 : 400, 12), color: colors.textPrimary }}>{msg}</span>
          </div>
        ))}
      </div>
      {/* Right sidebar / detail panel */}
      <div style={{ width: 160, backgroundColor: colors.bgSecondary, borderLeft: `1px solid ${colors.border}`, padding: unit * 1.5, display: 'flex', flexDirection: 'column', gap: unit }}>
        <div style={{ ...font(600, 12), color: colors.textPrimary }}>Message details</div>
        <div style={{ width: 36, height: 36, borderRadius: '50%', backgroundColor: [colors.primary, colors.success, colors.warning, colors.neutral300][selected], display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#fff', fontWeight: 700 }}>
          {['A', 'D', 'R', 'S'][selected]}
        </div>
        <div style={{ ...font(600, 12), color: colors.textPrimary }}>{'Alex Brown'}</div>
        <div style={{ ...font(400, 11), color: colors.textTertiary, lineHeight: 1.6 }}>Sent 2 hours ago via email</div>
        <div style={{ marginTop: 'auto' }}>
          <button style={{ ...ds.btn('primary'), width: '100%', fontSize: 12, paddingBlock: unit * 0.75 }}>Reply</button>
        </div>
      </div>
    </div>
  );
}

function HeaderDrawerDemo({ ds }) {
  const { colors, fontFamily, radius, unit } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navItems = [{ icon: '🏠', label: 'Home' }, { icon: '🔍', label: 'Explore' }, { icon: '🔔', label: 'Notifications' }, { icon: '👤', label: 'Profile' }];

  return (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
      {/* Phone mockup */}
      <div style={{ position: 'relative', width: 220, height: 340, borderRadius: 20, border: `2px solid ${colors.neutral300}`, overflow: 'hidden', backgroundColor: colors.bgPrimary, boxShadow: SHADOW_CSS.medium, flexShrink: 0 }}>
        {/* Status bar */}
        <div style={{ height: 28, backgroundColor: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 12 }}>
          <span style={{ ...font(600, 10), color: '#fff' }}>9:41</span>
          <span style={{ ...font(600, 10), color: '#fff' }}>●●● 100%</span>
        </div>
        {/* Header */}
        <div style={{ height: 48, backgroundColor: colors.bgPrimary, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingInline: 14, borderBottom: `1px solid ${colors.border}` }}>
          <button onClick={() => setDrawerOpen(true)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 4 }}>
            {[0,1,2].map(i => <div key={i} style={{ width: 18, height: 2, backgroundColor: colors.textPrimary, borderRadius: 1 }} />)}
          </button>
          <span style={{ ...font(700, 14), color: colors.textPrimary }}>MyApp</span>
          <div style={{ width: 28, height: 28, borderRadius: '50%', backgroundColor: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#fff', fontWeight: 700 }}>H</div>
        </div>
        {/* Content */}
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[90, 70, 80, 60, 85].map((w, i) => (
            <div key={i} style={{ height: 10, width: `${w}%`, backgroundColor: colors.neutral200, borderRadius: 4 }} />
          ))}
          <div style={{ height: 60, backgroundColor: colors.bgAccent, borderRadius: radius, marginTop: 4 }} />
        </div>
        {/* Drawer overlay */}
        {drawerOpen && (
          <div style={{ position: 'absolute', inset: 0, display: 'flex' }} onClick={() => setDrawerOpen(false)}>
            <div style={{ width: 160, height: '100%', backgroundColor: colors.neutral900, padding: `${unit * 2}px ${unit}px`, display: 'flex', flexDirection: 'column', gap: 4 }} onClick={e => e.stopPropagation()}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: `${unit}px ${unit}px`, marginBottom: unit }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: colors.primary, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, color: '#fff', fontWeight: 700 }}>H</div>
                <div>
                  <div style={{ ...font(600, 12), color: '#fff' }}>Huy Le</div>
                  <div style={{ ...font(400, 10), color: 'rgba(255,255,255,0.5)' }}>Admin</div>
                </div>
              </div>
              {navItems.map(item => (
                <div key={item.label} onClick={() => setDrawerOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: `${unit * 0.875}px ${unit}px`, borderRadius: radius, color: 'rgba(255,255,255,0.75)', cursor: 'pointer', ...font(400, 12) }}>
                  <span>{item.icon}</span><span>{item.label}</span>
                </div>
              ))}
              <div style={{ marginTop: 'auto', padding: `${unit * 0.875}px ${unit}px`, ...font(400, 12), color: 'rgba(255,255,255,0.4)' }}>v1.0.0</div>
            </div>
            <div style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} />
          </div>
        )}
        {/* Bottom nav */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 52, backgroundColor: colors.bgPrimary, borderTop: `1px solid ${colors.border}`, display: 'flex', alignItems: 'center' }}>
          {navItems.map((item, i) => (
            <div key={item.label} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, cursor: 'pointer' }}>
              <span style={{ fontSize: 16 }}>{item.icon}</span>
              <span style={{ ...font(i === 0 ? 600 : 400, 9), color: i === 0 ? colors.primary : colors.textTertiary }}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Description */}
      <div style={{ flex: 1, minWidth: 200, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ padding: '12px 16px', backgroundColor: '#fff', borderRadius: 10, border: `1px solid ${colors.border}` }}>
          <div style={{ ...font(600, 13), color: colors.textPrimary, marginBottom: 4 }}>Burger + Drawer</div>
          <div style={{ ...font(400, 12), color: colors.textSecondary, lineHeight: 1.7 }}>
            Tap the <strong>☰</strong> hamburger icon to open the side drawer. Tap the overlay to close it.<br /><br />
            In quickly-react: <code style={{ backgroundColor: colors.bgAccent, color: colors.primary, padding: '1px 5px', borderRadius: 4, fontSize: 11 }}>{'<Col absoluteFill bgOverlay>'}</code>
          </div>
        </div>
        <div style={{ padding: '12px 16px', backgroundColor: '#fff', borderRadius: 10, border: `1px solid ${colors.border}` }}>
          <div style={{ ...font(600, 13), color: colors.textPrimary, marginBottom: 4 }}>Bottom Navigation</div>
          <div style={{ ...font(400, 12), color: colors.textSecondary, lineHeight: 1.7 }}>
            A standard mobile bottom tab bar using <code style={{ backgroundColor: colors.bgAccent, color: colors.primary, padding: '1px 5px', borderRadius: 4, fontSize: 11 }}>{'<Row middle>'}</code> for the container.
          </div>
        </div>
      </div>
    </div>
  );
}

function TabsDemo({ ds }) {
  const { colors, fontFamily, radius, unit } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [activeTab, setActiveTab] = useState(0);
  const [style, setStyle] = useState('underline');

  const tabs = ['Overview', 'Analytics', 'Reports', 'Settings'];
  const content = [
    { title: 'Overview', text: 'Your project at a glance. Recent activity, key metrics, and quick actions are surfaced here.' },
    { title: 'Analytics', text: 'Deep-dive into traffic, conversion rates, and user behavior across all channels.' },
    { title: 'Reports', text: 'Download detailed reports or schedule automated exports to your data warehouse.' },
    { title: 'Settings', text: 'Configure notifications, permissions, integrations, and display preferences.' },
  ];

  const TAB_STYLES = {
    underline: {
      bar: { display: 'flex', borderBottom: `1.5px solid ${colors.border}`, gap: 0 },
      tab: (i) => ({ padding: `${unit}px ${unit * 2}px`, background: 'none', border: 'none', borderBottom: i === activeTab ? `2px solid ${colors.primary}` : '2px solid transparent', color: i === activeTab ? colors.primary : colors.textSecondary, ...font(i === activeTab ? 600 : 400, 13), cursor: 'pointer', marginBottom: -1.5 }),
    },
    pill: {
      bar: { display: 'flex', gap: 6, padding: `${unit * 0.75}px`, backgroundColor: colors.bgTertiary, borderRadius: radius + 4 },
      tab: (i) => ({ padding: `${unit * 0.625}px ${unit * 1.5}px`, background: i === activeTab ? colors.bgPrimary : 'none', border: 'none', borderRadius: radius, color: i === activeTab ? colors.primary : colors.textSecondary, ...font(i === activeTab ? 600 : 400, 13), cursor: 'pointer', boxShadow: i === activeTab ? '0 1px 3px rgba(0,0,0,0.08)' : 'none' }),
    },
    solid: {
      bar: { display: 'flex', gap: 2 },
      tab: (i) => ({ padding: `${unit * 0.75}px ${unit * 1.75}px`, background: i === activeTab ? colors.primary : 'transparent', border: `1px solid ${i === activeTab ? colors.primary : colors.border}`, borderRadius: radius, color: i === activeTab ? '#fff' : colors.textSecondary, ...font(i === activeTab ? 600 : 400, 13), cursor: 'pointer' }),
    },
  };

  const ts = TAB_STYLES[style];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {/* Style picker */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <span style={{ ...font(500, 12), color: colors.textTertiary }}>Style:</span>
        {['underline', 'pill', 'solid'].map(s => (
          <button key={s} onClick={() => setStyle(s)} style={{ padding: '4px 12px', borderRadius: 6, border: `1px solid ${style === s ? colors.primary : colors.border}`, background: style === s ? colors.bgAccent : 'transparent', color: style === s ? colors.primary : colors.textSecondary, ...font(style === s ? 600 : 400, 12), cursor: 'pointer' }}>
            {s.charAt(0).toUpperCase() + s.slice(1)}
          </button>
        ))}
      </div>
      {/* Tabs container */}
      <div style={{ backgroundColor: colors.bgPrimary, borderRadius: radius, border: `1px solid ${colors.border}`, overflow: 'hidden', boxShadow: ds.shadow }}>
        {/* Tab bar */}
        <div style={{ padding: `${unit * 1.5}px ${unit * 2}px 0`, backgroundColor: colors.bgPrimary }}>
          <div style={ts.bar}>
            {tabs.map((tab, i) => (
              <button key={tab} style={ts.tab(i)} onClick={() => setActiveTab(i)}>{tab}</button>
            ))}
          </div>
        </div>
        {/* Tab content */}
        <div style={{ padding: unit * 2.5 }}>
          <div style={{ ...font(700, 16), color: colors.textPrimary, marginBottom: unit }}>{content[activeTab].title}</div>
          <div style={{ ...font(400, 14), color: colors.textSecondary, lineHeight: 1.7, marginBottom: unit * 2 }}>{content[activeTab].text}</div>
          <div style={{ display: 'flex', gap: 8 }}>
            <button style={ds.btn('primary')}>Primary Action</button>
            <button style={ds.btn('ghost')}>Secondary</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function DialogDemo({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button style={ds.btn('primary')} onClick={() => setOpen(true)}>Open Dialog</button>
      {open && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.45)' }} onClick={() => setOpen(false)}>
          <div style={{ backgroundColor: colors.bgPrimary, borderRadius: radius * 1.5, boxShadow: SHADOW_CSS.strong, padding: unit * 3, maxWidth: 380, width: '90%', border: `1px solid ${colors.border}` }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: unit * 2 }}>
              <div style={{ ...font(700, 17), color: colors.textPrimary }}>Confirm Action</div>
              <span onClick={() => setOpen(false)} style={{ cursor: 'pointer', color: colors.textTertiary, fontSize: 20, lineHeight: 1, marginTop: -2 }}>×</span>
            </div>
            <div style={{ ...font(400, 14), color: colors.textSecondary, lineHeight: 1.7, marginBottom: unit * 3 }}>
              Are you sure you want to delete this item? This action cannot be undone and all associated data will be permanently removed.
            </div>
            <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
              <button style={ds.btn('ghost')} onClick={() => setOpen(false)}>Cancel</button>
              <button style={ds.btn('destructive')} onClick={() => setOpen(false)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function TooltipDemo({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [hover, setHover] = useState(null);
  const tooltips = [
    { label: 'Edit', tip: 'Edit this item' },
    { label: 'Share', tip: 'Share with team' },
    { label: 'Delete', tip: 'Permanently delete' },
  ];

  return (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', paddingTop: 8 }}>
      {tooltips.map(({ label, tip }) => (
        <div key={label} style={{ position: 'relative', display: 'inline-block' }}
          onMouseEnter={() => setHover(label)} onMouseLeave={() => setHover(null)}>
          <button style={ds.btn('ghost')}>{label}</button>
          {hover === label && (
            <div style={{ position: 'absolute', bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)', backgroundColor: colors.neutral900, color: '#fff', borderRadius: Math.min(radius, 6), padding: `${unit * 0.5}px ${unit}px`, whiteSpace: 'nowrap', ...font(500, 12), pointerEvents: 'none', zIndex: 100, boxShadow: SHADOW_CSS.medium }}>
              {tip}
              <div style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', borderWidth: 5, borderStyle: 'solid', borderColor: `${colors.neutral900} transparent transparent transparent` }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function PopoverDemo({ ds }) {
  const { colors, fontFamily, unit, radius } = ds;
  const font = (w, s) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button style={ds.btn('secondary')} onClick={() => setOpen(o => !o)}>
        Filter options ▾
      </button>
      {open && (
        <>
          <div style={{ position: 'fixed', inset: 0, zIndex: 99 }} onClick={() => setOpen(false)} />
          <div style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 100, backgroundColor: colors.bgPrimary, borderRadius: radius, border: `1.5px solid ${colors.border}`, boxShadow: SHADOW_CSS.medium, padding: unit * 1.5, minWidth: 220 }}>
            <div style={{ ...font(600, 13), color: colors.textPrimary, marginBottom: unit }}>Filter by status</div>
            {['All items', 'Active', 'Pending', 'Archived'].map((item, i) => (
              <div key={item} onClick={() => setOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: `${unit * 0.75}px ${unit}px`, borderRadius: Math.min(radius, 6), cursor: 'pointer', color: i === 0 ? colors.primary : colors.textPrimary, fontWeight: i === 0 ? 600 : 400, ...font(i === 0 ? 600 : 400, 13), backgroundColor: i === 0 ? colors.bgAccent : 'transparent' }}>
                {i === 0 && <span style={{ fontSize: 11 }}>✓</span>}
                {item}
              </div>
            ))}
            <div style={{ height: 1, backgroundColor: colors.border, marginBlock: unit }} />
            <div style={{ display: 'flex', gap: 8 }}>
              <button style={{ ...ds.btn('ghost'), flex: 1, fontSize: 12, paddingBlock: unit * 0.625 }} onClick={() => setOpen(false)}>Reset</button>
              <button style={{ ...ds.btn('primary'), flex: 1, fontSize: 12, paddingBlock: unit * 0.625 }} onClick={() => setOpen(false)}>Apply</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

function LayoutTab({ ds, preferences }) {
  return (
    <div>
      <Section title="Left Sidebar">
        <LeftSidebarDemo ds={ds} />
      </Section>
      <Section title="Right Sidebar (Master-Detail)">
        <RightSidebarDemo ds={ds} />
      </Section>
      <Section title="Mobile: Header + Burger Drawer + Bottom Nav">
        <HeaderDrawerDemo ds={ds} />
      </Section>
      <Section title="Tabs (3 styles)">
        <TabsDemo ds={ds} />
      </Section>
      <Section title="Modal / Dialog">
        <DialogDemo ds={ds} />
      </Section>
      <Section title="Tooltip">
        <TooltipDemo ds={ds} />
      </Section>
      <Section title="Popover">
        <PopoverDemo ds={ds} />
      </Section>
    </div>
  );
}

/* ─── Tokens tab ─────────────────────────────────────────────── */

function TokensTab({ preferences }) {
  const { colors, typography: { fontFamily }, borders: { radius }, spacing: { unit } } = preferences;
  const font = (w = 400, s = 14) => ({ fontFamily: `'${fontFamily}', sans-serif`, fontWeight: w, fontSize: s });

  const colorGroups = [
    {
      label: 'Brand', swatches: [
        { name: 'Primary',  color: colors.primary },
        { name: 'Light',    color: colors.primaryLight },
        { name: 'Dark',     color: colors.primaryDark },
        { name: 'Bg tint',  color: colors.bgAccent.startsWith('rgba') ? colors.primary : colors.bgAccent, opacity: 0.15 },
      ],
    },
    {
      label: 'Semantic', swatches: [
        { name: 'Success', color: colors.success },
        { name: 'Warning', color: colors.warning },
        { name: 'Error',   color: colors.error },
        { name: 'Info',    color: colors.info },
      ],
    },
    {
      label: 'Neutrals', swatches: [
        { name: '50',  color: colors.neutral50 },
        { name: '100', color: colors.neutral100 },
        { name: '200', color: colors.neutral200 },
        { name: '300', color: colors.neutral300 },
        { name: '400', color: colors.neutral400 },
        { name: '500', color: colors.neutral500 },
        { name: '600', color: colors.neutral600 },
        { name: '700', color: colors.neutral700 },
        { name: '800', color: colors.neutral800 },
        { name: '900', color: colors.neutral900 },
      ],
    },
    {
      label: 'Surfaces', swatches: [
        { name: 'Surface 1', color: colors.bgPrimary },
        { name: 'Surface 2', color: colors.bgSecondary },
        { name: 'Surface 3', color: colors.bgTertiary },
        { name: 'Border',    color: colors.border },
      ],
    },
    {
      label: 'Text', swatches: [
        { name: 'Primary',   color: colors.textPrimary },
        { name: 'Secondary', color: colors.textSecondary },
        { name: 'Tertiary',  color: colors.textTertiary },
        { name: 'Inverse',   color: colors.textInverse },
      ],
    },
  ];

  const typeScale = [
    { name: 'h1',      size: 48, weight: 700 },
    { name: 'h2',      size: 36, weight: 700 },
    { name: 'h3',      size: 24, weight: 600 },
    { name: 'h4',      size: 20, weight: 600 },
    { name: 'h5',      size: 17, weight: 600 },
    { name: 'h6',      size: 15, weight: 600 },
    { name: 'body lg', size: 17, weight: 400 },
    { name: 'body',    size: 15, weight: 400 },
    { name: 'small',   size: 13, weight: 400 },
    { name: 'caption', size: 11, weight: 400 },
  ];

  return (
    <div>
      <Section title="Color Tokens">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {colorGroups.map(group => (
            <div key={group.label}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#a1a1aa', marginBottom: 8 }}>{group.label}</div>
              <div className="token-grid">
                {group.swatches.map(({ name, color, opacity }) => (
                  <div key={name} className="token-swatch">
                    <div
                      className="swatch-color"
                      style={{
                        backgroundColor: color,
                        opacity: opacity ?? 1,
                        outline: color === '#FFFFFF' || color === colors.textInverse ? '1px solid #e4e4e7' : 'none',
                        outlineOffset: -1,
                      }}
                    />
                    <div className="swatch-label">{name}</div>
                    <div style={{ fontSize: 9, color: '#a1a1aa', textAlign: 'center', fontFamily: 'monospace', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {color}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography Scale">
        <div style={{ background: '#fff', borderRadius: 10, padding: '4px 20px', border: '1px solid #e4e4e7' }}>
          {typeScale.map(({ name, size, weight }) => (
            <div key={name} className="type-scale-row">
              <span className="type-scale-label">{name}</span>
              <span className="type-scale-meta">{size}/{weight}</span>
              <span style={{ fontSize: Math.min(size, 32), fontWeight: weight, fontFamily: `'${fontFamily}', sans-serif`, color: colors.textPrimary, lineHeight: 1.2 }}>
                {size >= 36 ? 'The quick brown fox' : 'The quick brown fox jumps over the lazy dog'}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title={`Spacing Scale (unit = ${unit}px)`}>
        <div style={{ background: '#fff', borderRadius: 10, padding: 20, border: '1px solid #e4e4e7' }}>
          <div className="spacing-rows">
            {[0, 1, 2, 3, 4, 5, 6, 8].map(n => (
              <div key={n} className="spacing-row">
                <span className="spacing-label" style={{ color: '#71717a' }}>m{n}</span>
                <div className="spacing-bar-wrap">
                  <div className="spacing-bar" style={{ width: Math.max(4, n * unit * 4), backgroundColor: colors.primary + '28', borderLeftColor: colors.primary }} />
                </div>
                <span className="spacing-value" style={{ color: '#71717a' }}>{n * unit}px</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Border Radius Scale">
        <div style={{ background: '#fff', borderRadius: 10, padding: 20, border: '1px solid #e4e4e7', display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
          {[{ label: 'none', r: 0 }, { label: 'sm', r: Math.round(radius * 0.5) }, { label: 'md', r: radius }, { label: 'lg', r: radius * 1.5 }, { label: 'xl', r: radius * 2 }, { label: 'full', r: 9999 }].map(({ label, r }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <div style={{ width: 48, height: 32, backgroundColor: colors.primary, borderRadius: r, marginBottom: 6 }} />
              <div style={{ fontSize: 10, color: '#71717a', fontWeight: 500 }}>{label}</div>
              <div style={{ fontSize: 9, color: '#a1a1aa', fontFamily: 'monospace' }}>{r === 9999 ? '∞' : r + 'px'}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}

/* ─── Code tab ───────────────────────────────────────────────── */

const CODE_FILES = [
  // Core
  'tokens.ts', 'textProps.ts', 'viewProps.ts', 'index.tsx',
  // Components
  'Button.tsx', 'IconButton.tsx', 'Input.tsx', 'Textarea.tsx',
  'Card.tsx', 'Badge.tsx', 'Dropdown.tsx', 'Section.tsx',
  'Checkbox.tsx', 'Radio.tsx', 'Switch.tsx',
  'Label.tsx', 'HelperText.tsx', 'FormField.tsx',
  'SearchBar.tsx', 'Toast.tsx', 'Accordion.tsx',
  // Layouts
  'LeftSidebar.tsx', 'MasterDetail.tsx', 'Header.tsx', 'BottomNav.tsx', 'Tabs.tsx',
  'Dialog.tsx', 'Tooltip.tsx', 'Popover.tsx',
];

function CodeTab({ preferences }) {
  const [activeFile, setActiveFile] = useState('tokens.ts');
  const files = useMemo(() => generateAllFiles(preferences), [preferences]);

  return (
    <div className="code-container">
      <div style={{ fontSize: 12, color: '#71717a', marginBottom: 4 }}>
        Generated code — ready to drop into your React Native project. Click <strong style={{ color: '#3f3f46' }}>↓ Download Code</strong> in the header to get the full zip.
      </div>
      <div className="code-file-tabs">
        {CODE_FILES.map(f => (
          <button key={f} className={`code-file-tab${activeFile === f ? ' active' : ''}`} onClick={() => setActiveFile(f)}>
            {f}
          </button>
        ))}
      </div>
      <div className="code-block">
        <pre>{files[activeFile] ?? '// File not found'}</pre>
      </div>
    </div>
  );
}

/* ─── Main PreviewPanel ──────────────────────────────────────── */

export default function PreviewPanel({ preferences }) {
  const [activeTab, setActiveTab] = useState('components');
  const ds = useDS(preferences);

  const TABS = [
    { id: 'components', label: 'Components' },
    { id: 'layout',     label: 'Layout' },
    { id: 'tokens',     label: 'Tokens' },
    { id: 'code',       label: 'Code' },
  ];

  return (
    <div className="preview-panel">
      <div className="preview-tabs">
        {TABS.map(tab => (
          <button key={tab.id} className={`preview-tab${activeTab === tab.id ? ' active' : ''}`} onClick={() => setActiveTab(tab.id)}>
            {tab.label}
          </button>
        ))}
        <div style={{ flex: 1 }} />
        <div style={{ fontSize: 12, color: '#a1a1aa', paddingBottom: 10, paddingRight: 4 }}>
          <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', backgroundColor: preferences.colors.primary, marginRight: 6, verticalAlign: 'middle' }} />
          {preferences.typography.fontFamily} · r{preferences.borders.radius} · u{preferences.spacing.unit}
        </div>
      </div>

      <div className="preview-scroll">
        {activeTab === 'components' && <ComponentsTab ds={ds} preferences={preferences} />}
        {activeTab === 'layout'     && <LayoutTab     ds={ds} preferences={preferences} />}
        {activeTab === 'tokens'     && <TokensTab     preferences={preferences} />}
        {activeTab === 'code'       && <CodeTab       preferences={preferences} />}
      </div>
    </div>
  );
}
